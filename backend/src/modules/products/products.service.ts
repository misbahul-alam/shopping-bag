import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Category } from 'src/database/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const {
      name,
      slug,
      description,
      category_id,
      original_price,
      discounted_price,
    } = createProductDto;
    console.log(category_id);

    const product = await this.productRepository.findOne({ where: { slug } });
    if (product) {
      throw new ConflictException(`Product with slug ${slug} already exists`);
    }

    const category = await this.categoryRepository.findOne({
      where: { id: category_id },
    });
    console.log(category, category_id);

    if (!category) {
      throw new NotFoundException(`Category with id ${category_id} not found`);
    }
    const newProduct = this.entityManager.create(Product, {
      name,
      slug,
      description,
      category_id,
      original_price,
      discounted_price,
      category,
    });

    if (!newProduct) {
      throw new BadRequestException('Product creation failed');
    }
    const savedProduct = await this.entityManager.save(newProduct);
    if (!savedProduct) {
      throw new BadRequestException('Product creation failed');
    }
    return savedProduct;
  }

  async findAll() {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const deletedProduct = await this.productRepository.delete({ id });
    if (!deletedProduct) {
      throw new BadRequestException(`Product with id ${id} deletion failed`);
    }
    if (deletedProduct.affected === 0) {
      throw new BadRequestException(`Product with id ${id} deletion failed`);
    }
    if (deletedProduct.affected === 1) {
      return `Product with id ${id} deleted successfully`;
    }

    return `This action removes a #${id} product`;
  }
}
