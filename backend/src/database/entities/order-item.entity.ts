import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { Order } from './order.entity'; // Assuming you have an Order entity
import { Product } from './product.entity'; // Assuming you have a Product entity

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' }) // Foreign key for Order
  order: Order;

  @ManyToOne(() => Product, (product) => product.orders)
  @JoinColumn({ name: 'product_id' }) // Foreign key for Product
  product: Product;

  @Column({ type: 'int' })
  quantity: number; // Quantity of the product in the order

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number; // Price of the product at the time of ordering
}
