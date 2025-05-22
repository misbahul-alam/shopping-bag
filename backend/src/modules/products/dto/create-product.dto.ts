import { IsDecimal, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsString({ message: 'Slug must be a string' })
  @IsNotEmpty({ message: 'Slug is required' })
  slug: string;
  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
  @IsString({ message: 'Category ID must be a string' })
  @IsNotEmpty({ message: 'Category ID is required' })
  @IsUUID('1', { message: 'Category ID must be a valid UUID' })
  category_id: string;
  @IsDecimal(
    { decimal_digits: '0,2' },
    { message: 'Original price must be a decimal' },
  )
  @IsNotEmpty({ message: 'Original price is required' })
  regular_price: number;
  @IsDecimal(
    { decimal_digits: '0,2' },
    { message: 'Discounted price must be a decimal' },
  )
  @IsNotEmpty({ message: 'Discounted price is required' })
  selling_price: number;
}
