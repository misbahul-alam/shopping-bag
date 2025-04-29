import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => User, (user) => user.cart)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => Product, (product) => product.carts)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @Column()
  quantity: number;
  @Column()
  total_price: number;
}
