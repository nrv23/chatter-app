import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './dtos/input/login.input';
import { UsersService } from '../users/users.service';
import { AuthResponseType } from './dtos/types/AuthResponseType ';

@Injectable()
export class AuthService {

    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ) {

    }

    async login({ email, password }: LoginInput) {

        const user = await this.userService.verifiyUser(email, password);
        const tokenPayload: TokenPayload = {
            _id: user._id.toHexString(),
            email: user.email
        }

        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() + this.configService.getOrThrow("TOKEN_EXPIRES_IN")
        );
        const token = this.jwtService.sign(tokenPayload);
        const responseUser =  new AuthResponseType();
        delete user.password;
        responseUser.user = user;
        responseUser.token = token;
        return responseUser;
    }
}
