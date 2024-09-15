import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "../../users/entities/user.entity";

const getCurrentUserByContext = (context: ExecutionContext) : User => {
    return context.switchToHttp().getRequest().user
}

export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => getCurrentUserByContext(context)
);