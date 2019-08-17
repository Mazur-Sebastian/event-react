import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { UserData } from './interfaces/userData.interface';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiBearerAuth()
    @Get('getUsers')
    @UseGuards(AuthGuard('jwt'))
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @ApiBearerAuth()
    @Get('getUser/:id')
    @UseGuards(AuthGuard('jwt'))
    async getUser(@Param('id') id: string): Promise<UserData> {
        return this.userService.findUserById(id);
    }
}
