export class CreateProductDto {
  name: string;
  slug: string;
  description: string;
  category_id: string;
  original_price: number;
  discounted_price: number;
}
