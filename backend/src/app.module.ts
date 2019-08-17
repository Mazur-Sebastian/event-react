import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventsService } from './events/events.service';
import { EventsModule } from './events/events.module';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        UserModule,
        AuthModule,
        EventsModule,
    ],
    providers: [EventsService],
})
export class AppModule {}
