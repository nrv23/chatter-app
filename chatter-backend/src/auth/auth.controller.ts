import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './strategies/current-user.decorator';
import {Response } from 'express';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {

    }

    @Post('login') 
    @UseGuards(LocalAuthGuard)
    async login(
        @CurrentUser() user: User,
        @Res({
            passthrough: true // no se debe modificar el flujo de los datos
        }) response: Response
    ) {
        return this.authService.login(user, response);
    }
} 
