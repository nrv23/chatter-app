import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
//import { Logger } from 'nestjs-pino';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule /*, { bufferLogs: true }*/);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false
    })
  )


  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000'], // Define los dominios permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Define los métodos permitidos
    allowedHeaders: 'Content-Type, Accept,Authorization', // Define los encabezados permitidos
    credentials: true, // Permitir el envío de cookies en las solicitudes
  };

  app.enableCors(corsOptions);
  // app.useLogger(app.get(Logger))
  app.use(cookieParser())
  const configService = app.get(ConfigService); // configurar el puerto en el env
  await app.listen(configService.getOrThrow("PORT"));

  console.log("Aplicacion corriendo en puerto" + configService.getOrThrow("PORT"));
}
bootstrap();
