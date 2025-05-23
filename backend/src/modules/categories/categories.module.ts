import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { CloudinaryService } from 'src/shared/cloudinary/cloudinary.service';
import { CloudinaryModule } from 'src/shared/cloudinary/cloudinary.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), CloudinaryModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, CloudinaryService],
})
export class CategoriesModule {}
