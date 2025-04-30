import { UserRole } from 'src/common/enums/user-role.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Cart } from './cart.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ nullable: true, select: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];
}
