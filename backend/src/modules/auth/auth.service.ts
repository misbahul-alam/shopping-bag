import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CustomJwtPayload } from 'src/common/interfaces/jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async RegisterUser(registerDto: RegisterDto) {
    const { first_name, last_name, email, password, confirm_password } =
      registerDto;

    if (password !== confirm_password) {
      throw new BadRequestException('Passwords do not match');
    }

    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new BadRequestException('User already exists');
    }
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = this.userRepository.create({
      first_name,
      last_name,
      email,
      password: hashPassword,
    });

    if (newUser) {
      const savedUser = await this.userRepository.save(newUser);
      return savedUser;
    }
    throw new BadRequestException('User not created');
  }

  async LoginUser(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      select: ['id', 'email', 'password'],
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload: CustomJwtPayload = {
      sub: user.id,
      email: user.email,
    };

    const access_token = this.jwtService.sign(payload);

    return { access_token, ...user };
  }
}
