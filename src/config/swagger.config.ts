import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('Project Backend')
        .setDescription('Documentation Swagger of my API NestJS')
        .setVersion('1.0')
    
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
}