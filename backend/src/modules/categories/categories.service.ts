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
    if (!image) {
      throw new BadRequestException('Image not provided');
    }
    const category = await this.categoryRepository.findOne({ where: { slug } });

    if (category) {
      throw new ConflictException('Category already exists');
    }
    const uploadImage = await this.cloudinaryService.uploadFile(image);
    if (!uploadImage) {
      throw new BadRequestException('Image not uploaded');
    }

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

  async deleteCategory(id: string) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const deletedCategory = await this.categoryRepository.delete({ id });
    if (!deletedCategory) {
      throw new BadRequestException('Category not deleted');
    }
    if (
      category.image !=
      'https://res.cloudinary.com/misbahulalam/image/upload/v1746076044/photo_g8izaf.png'
    ) {
      await this.cloudinaryService.deleteFile(category.image);
    }
    return {
      message: 'Category deleted successfully',
      deletedCategory,
    };
  }
}
