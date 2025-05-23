import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { CartsModule } from './modules/carts/carts.module';
import { CloudinaryService } from './shared/cloudinary/cloudinary.service';
import databaseConfig from './config/database.config';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryModule } from './shared/cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig,
    }),
    DatabaseModule,
    MulterModule.register({
      dest: './uploads',
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    ProductsModule,
    CartsModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}
