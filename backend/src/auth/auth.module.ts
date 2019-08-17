import { UserService } from './../user/user.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from './../user/user.module';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: process.env.SECRET_KEY,
            signOptions: {
                expiresIn: 3600,
            },
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, JwtStrategy],
})
export class AuthModule {}
