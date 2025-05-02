import { IsNumber, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCartDto {
  @IsString({ message: 'product_id must be a string' })
  @IsNotEmpty({ message: 'product_id is required' })
  product_id: string;
  @IsNotEmpty({ message: 'quantity is required' })
  @IsNumber({}, { message: 'quantity must be a number' })
  quantity: number;
}
