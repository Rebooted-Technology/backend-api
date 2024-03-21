import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role/role.enum';
import { Request } from 'express';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<boolean> {
        if (username === "admin") {
            return true
        }
        return false
    }

    async login(user: any): Promise<{ access_token: string }> {
        const payload = { username: user, sub: "123465-456789-789123", role: [Role.ADMIN] }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    extractTokenFromHeader(request: Request): string {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : '';
    }

    decodeToken(token: string) {
        return this.jwtService.decode(token)
    }

}