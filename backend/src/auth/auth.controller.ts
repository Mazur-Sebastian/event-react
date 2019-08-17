import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { TokenDto } from './dto/token.dto';
import { CreateUserDto } from 'src/user/dto/createUser.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() loginData: LoginDto) {
        return await this.authService.loginUser(loginData);
    }

    // @Post('validate')
    // async verifyToken(@Body() payload: TokenDto) {
    //     return await this.authService.verifyToken(payload);
    // }

    @Post('register')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.registerUser(createUserDto);
    }

    @Get('verify/:id')
    async verifyToken(@Param('id') id): Promise<string | object> {
        return await this.authService.verifyToken(id);
    }
}
