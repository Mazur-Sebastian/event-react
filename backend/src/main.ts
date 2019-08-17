import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Event-app')
        .setDescription('The event-app API description')
        .setVersion('0.0.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(process.env.NEST_PORT);
    console.log(
        `serwer listen on port: http://localhost:${process.env.NEST_PORT}`,
    );
}

bootstrap();
