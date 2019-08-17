import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/JwtPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: JwtPayload) {
        console.log('validate payload', payload);
        const user = await this.authService.validateUser(payload.id);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
