import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
        const payload = { username: user, sub: "123465-456789-789123" } 
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}