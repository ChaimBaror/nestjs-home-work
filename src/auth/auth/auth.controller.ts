import { Controller, Get, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get()
    validateUser(@Body() user: CreateUserDto) {
        return this.authService.validateUser(user);
    }

    @Get('login')
    login(@Body() user: CreateUserDto) {
        console.log("login",user);
        return this.authService.login(user);

    }

}
