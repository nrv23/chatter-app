import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../../users/entities/user.entity";
import { GqlContextType, GqlExecutionContext } from "@nestjs/graphql";

const getCurrentUserByContext = (context: ExecutionContext) : User => {
    
    let user: User;
    if(context.getType() === "http") {
        user = context.switchToHttp().getRequest().user;
    } else if(context.getType<GqlContextType>()=== "graphql") {
        user = GqlExecutionContext.create(context).getContext().req.user;
    }
    console.log({user})
    return user;
}

export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => getCurrentUserByContext(context)
);