import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport';
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "../token-payload.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([ // extraer el jwt de la cookie
                ( request: Request ) => request.cookies.Authentication
            ]),
            secretOrKey: configService.getOrThrow("TOKEN_SECRET")
        })
    }

    validate(payload: TokenPayload) { // esta funcion devuelve el token decodificado
        return payload;
    }
}