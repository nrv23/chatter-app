import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow("TOKEN_SECRET"),
        signOptions: {
          expiresIn: +configService.getOrThrow("TOKEN_EXPIRES_IN")
        }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController]
})
export class AuthModule { }
