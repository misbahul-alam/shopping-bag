import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/database/entities/cart.entity';
import { EntityManager, Repository } from 'typeorm';
import { Product } from 'src/database/entities/product.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  async addCartItem(createCartDto: CreateCartDto, userId: string) {
    const { product_id, quantity } = createCartDto;
    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }
    const product = await this.entityManager.findOne(Product, {
      where: { id: product_id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${product_id} not found`);
    }
    const cart = await this.cartRepository.findOne({
      where: { user: { id: userId }, product: { id: product_id } },
    });
    if (cart) {
      cart.quantity = quantity;
      await this.cartRepository.save(cart);
      return cart;
    } else {
      const newCart = this.entityManager.create(Cart, {
        user: { id: userId },
        product,
        quantity,
      });
      await this.cartRepository.save(newCart);
      return newCart;
    }
  }

  async findAllCartItems(userId: string) {
    const carts = await this.cartRepository.find({
      where: { user: { id: userId } },
    });
    return carts;
  }

  async findCartItemById(id: string) {
    const cart = await this.cartRepository.findOneBy({ id });
    if (!cart) {
      throw new NotFoundException(`Cart not found`);
    }
    return cart;
  }

  async updateCartItemQuantity(id: string, updateCartDto: UpdateCartDto) {
    const { quantity } = updateCartDto;
    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than 0');
    }
    const cart = await this.cartRepository.findOneBy({ id });
    if (!cart) {
      throw new NotFoundException(`Cart not found`);
    }
    const updatedCart = await this.cartRepository.update(id, { quantity });
    if (!updatedCart) {
      throw new BadRequestException(`Failed to update cart`);
    }
    return updatedCart;
  }

  async deleteCartItem(id: string) {
    const cart = this.cartRepository.findOneBy({ id });
    if (!cart) {
      throw new NotFoundException(`Cart not found`);
    }
    const deleteCart = await this.cartRepository.delete(id);

    return deleteCart;
  }
}
