import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
@Injectable()
export class AuthService {
    user: CreateUserDto
    constructor(private userService: UserService, private readonly jwtService: JwtService) { }

    validateUser(user: CreateUserDto) {
        const { username, password } = user;
        // console.log(username, password);
        const users = this.userService.findUser(username)
        if (users && user.password === password) {
            const { password, ...result } = users;
            console.log("is work ", result);
            

            return result;
        }

        throw new UnauthorizedException('The user does not exist');

    }
    login(login: CreateUserDto) {
        const user = this.validateUser(login);
        const payload = { username: user.username, userId: user.id };
        return {
            ...user,
            accessToken: this.jwtService.sign(payload),
        };
    }

}



