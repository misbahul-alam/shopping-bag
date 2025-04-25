import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  user_id: string;
  @Column()
  product_id: string;
  @Column()
  quantity: number;
  @Column()
  total_price: number;
  @ManyToMany(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { eager: true })
  products: OrderItem[];
  @OneToOne(() => Address, (address) => address.order)
  address: Address;
}
