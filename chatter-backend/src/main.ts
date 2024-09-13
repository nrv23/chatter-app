import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule /*, { bufferLogs: true }*/);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false
    })
  )
  // app.useLogger(app.get(Logger))

  const configService = app.get(ConfigService); // configurar el puerto en el env
  await app.listen(configService.getOrThrow("PORT"));
}
bootstrap();
