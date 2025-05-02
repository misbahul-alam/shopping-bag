import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @IsNotEmpty({ message: 'quantity is required' })
  @IsNumber({}, { message: 'quantity must be a number' })
  quantity: number;
}
