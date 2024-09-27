import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt-stragety';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
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
  ]
})
export class AuthModule { }
