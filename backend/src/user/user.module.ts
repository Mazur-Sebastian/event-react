import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './schemas/UserSchema.schema';
import { USER_SCHEMA } from './../constants/schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: USER_SCHEMA, schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
