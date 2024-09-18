import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuard extends AuthGuard('jwt') { // este guard es quien valida usando la estrategia configurada para jwt
    // este guard protege las rutas 

    
}