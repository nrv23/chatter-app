import { Injectable } from '@nestjs/common';
import { User } from '../../../chatter-ui/src/models/User';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {

    }

    async login(user: User, res: Response) {
        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() + this.configService.getOrThrow("TOKEN_EXPIRES_IN")
        );

        const tokenPayload : TokenPayload = {
            _id: user._id,
            email: user.email
        }

        const token = this.jwtService.sign(tokenPayload);
        res.cookie('Authentication',token,{
            httpOnly: true,
            expires
        })
    }
}
