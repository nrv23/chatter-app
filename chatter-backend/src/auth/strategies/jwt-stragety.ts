import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport';
//import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "../token-payload.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly configService: ConfigService
    ) {
        console.log({secret: configService.getOrThrow("TOKEN_SECRET")});
        super({
            /*jwtFromRequest: ExtractJwt.fromExtractors([ // extraer el jwt de la cookie
                ( request: Request ) => request.cookies.Authentication
            ]),*/
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // en donde la estrategia obtiene el token en cada llaado http
            secretOrKey: configService.getOrThrow("TOKEN_SECRET")
        })
    }

    validate(payload: TokenPayload) { // esta funcion devuelve el token decodificado
        console.log({payload});
        return payload;
    }
}