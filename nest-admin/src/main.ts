import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())
  app.enableCors({
    origin: 'http://localhost:3000', // React 3000 Angular 4200 Vue 8080
    credentials: true // means we will pass cookies back and forth for every request
  })
  await app.listen(3000);
}
bootstrap();
