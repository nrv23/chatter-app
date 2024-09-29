//import { Response } from 'express';
import { AuthService } from './auth.service';
//import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthResponseType } from './dtos/types/AuthResponseType ';
import { LoginInput } from './dtos/input/login.input';


@Resolver(() =>AuthResponseType)
export class AuthResolver {

    constructor(
        private readonly authService: AuthService
    ) {

    }

    @Mutation(() => AuthResponseType, { name: "login" })

    async login(
        @Args('loginInput') loginInput: LoginInput,
        //@Context() context: { res: Response }
    ) {
        const response = await this.authService.login(loginInput);

        /*context.res.cookie("Authentication", token, {
            httpOnly: true,
            secure: false,
            sameSite: 'none',
            expires,
            path: "/graphql"
        });*/

        return response;
    }
} 
