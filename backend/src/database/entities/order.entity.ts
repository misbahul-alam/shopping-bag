import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';
import { OrderItem } from './order-item.entity';
import { OrderStatus } from 'src/common/enums/order-status.enum';

@Entity('orders')
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
  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { eager: true })
  products: OrderItem[];
  @OneToOne(() => Address, (address) => address.order)
  address: Address;
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
