import { Controller, Post } from "@nestjs/common";
import { sign } from "crypto";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('signup')
    signup() {
        return this.authService.signup()
    };

    @Post('login')
    signin() {
        return this.authService.signin()
    }
}