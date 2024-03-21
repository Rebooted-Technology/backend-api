import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { Public } from './guard/public.decorator';
import { Roles } from './role/roles.decorator';
import { Role } from './role/role.enum';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req: Request) {
        return this.authService.login(req.user)
    }

    @Roles(Role.ADMIN)
    @Get('verify')
    async verify(@Req() req: Request) {
        const token = this.authService.extractTokenFromHeader(req)
        return {
            access_token: this.authService.decodeToken(token),
            user: req.user
        }
    }

}
