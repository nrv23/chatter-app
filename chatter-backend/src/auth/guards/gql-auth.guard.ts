import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";


export class GqlAuthGuard extends AuthGuard('jwt') {

    getRequest(context: ExecutionContext) {
        // convertir el request en grahgql request 

        const ctx = GqlExecutionContext.create(context);

        return ctx.getContext().req; // devuelve la solicitud
    }
}