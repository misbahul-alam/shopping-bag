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

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async CreateCategory(createCategoryDto: CreateCategoryDto) {
    const { name, slug, description } = createCategoryDto;
    const category = await this.categoryRepository.findOne({ where: { slug } });

    if (category) {
      throw new ConflictException('Category already exists');
    }
    const newCategory = this.categoryRepository.create({
      name,
      slug,
      description,
    });
    if (!newCategory) {
      throw new NotFoundException('Category not created');
    }
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async findAll() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
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

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
