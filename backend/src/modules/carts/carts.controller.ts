import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('carts')
@UseGuards(JwtAuthGuard)
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  addCartItem(@Req() req, @Body() createCartDto: CreateCartDto) {
    const userId = req.user.id;
    return this.cartsService.addCartItem(createCartDto, userId);
  }

  @Get()
  findAllCartItems(@Req() req) {
    const userId = req.user.id;
    return this.cartsService.findAllCartItems(userId);
  }

  @Get(':id')
  findCartItemById(@Param('id') id: string) {
    return this.cartsService.findCartItemById(id);
  }

  @Patch(':id')
  updateCartItemQuantity(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartsService.updateCartItemQuantity(id, updateCartDto);
  }

  @Delete(':id')
  deleteCartItem(@Param('id') id: string) {
    return this.cartsService.deleteCartItem(id);
  }
}
