import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from 'src/shared/cloudinary/cloudinary.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async addCategory(
    createCategoryDto: CreateCategoryDto,
    image: Express.Multer.File,
  ) {
    const { name, slug, description } = createCategoryDto;
    const category = await this.categoryRepository.findOne({ where: { slug } });

    if (category) {
      throw new ConflictException('Category already exists');
    }
    const uploadImage = await this.cloudinaryService.uploadFile(image);

    // console.log(imageUrl);
    const newCategory = this.categoryRepository.create({
      name,
      slug,
      description,
      image: uploadImage.secure_url,
    });
    if (!newCategory) {
      throw new NotFoundException('Category not created');
    }
    await this.categoryRepository.save(newCategory);
    return { ...newCategory, message: 'Category created successfully' };
  }

  async findAllCategory() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findCategoryById(id: string) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const updatedCategory = this.categoryRepository.update(
      { id },
      updateCategoryDto,
    );
    if (!updatedCategory) {
      throw new BadRequestException('Category not updated');
    }
    return updatedCategory;
  }

  deleteCategory(id: string) {
    return `This action removes a #${id} category`;
  }
}
