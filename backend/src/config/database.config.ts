import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from 'src/database/entities/address.entity';
import { Cart } from 'src/database/entities/cart.entity';
import { Category } from 'src/database/entities/category.entity';
import { OrderItem } from 'src/database/entities/order-item.entity';
import { Order } from 'src/database/entities/order.entity';
import { ProductImage } from 'src/database/entities/product-image.entity';
import { Product } from 'src/database/entities/product.entity';
import { User } from 'src/database/entities/user.entity';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
      User,
      Order,
      Cart,
      Address,
      OrderItem,
      Product,
      ProductImage,
      Category,
    ],
    synchronize: true,
    autoLoadEntities: true,
  }),
);
