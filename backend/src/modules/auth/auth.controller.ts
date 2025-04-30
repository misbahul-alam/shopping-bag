import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async LoginUser(@Body() loginDto: LoginDto) {
    return await this.authService.LoginUser(loginDto);
  }
  @Post('register')
  async RegisterUser(@Body() registerDto: RegisterDto) {
    return await this.authService.RegisterUser(registerDto);
  }
}
