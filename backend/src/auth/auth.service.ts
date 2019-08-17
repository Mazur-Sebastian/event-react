import { JwtPayload } from './interfaces/JwtPayload';
import {
    Injectable,
    ForbiddenException,
    BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { UserService } from './../user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtToken } from './interfaces/JwtToken';
import { CreateUserDto } from './../user/dto/createUser.dto';
import { UserData } from 'src/user/interfaces/userData.interface';

const salt = bcrypt.genSaltSync(10);

interface JWT {
    id: string;
    ion: number;
    exp: number;
}
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}

    async loginUser(loginData: LoginDto): Promise<JwtToken | any> {
        try {
            const { _id, password } = await this.userService.getUser(
                loginData.email,
            );

            const match = await bcrypt.compareSync(
                loginData.password,
                password,
            );

            if (!match) {
                return new BadRequestException('Bad password');
            }

            const accessToken = this.jwtService.sign({ id: _id });

            return { accessToken };
        } catch (error) {
            throw new ForbiddenException();
        }
    }

    async registerUser(registerData: CreateUserDto): Promise<JwtToken> {
        try {
            const hashPassword = await bcrypt.hashSync(
                registerData.password,
                salt,
            );
            const userWithHashPassword = {
                ...registerData,
                password: hashPassword,
            };
            const { _id } = await this.userService.createUser(
                userWithHashPassword,
            );
            const accessToken = this.jwtService.sign({ id: _id });

            return { accessToken };
        } catch (error) {
            throw new ForbiddenException('Some message');
        }
    }

    async validateUser(id: string): Promise<UserData> {
        return await this.userService.findUserById(id);
    }

    async verifyToken(accessToken: string): Promise<string | object> {
        const userData = await jwt.verify(accessToken, process.env.SECRET_KEY);

        return userData;
    }
}
