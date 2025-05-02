import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/database/entities/cart.entity';
import { Product } from 'src/database/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Product])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
