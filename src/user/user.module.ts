import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from 'src/auth/auth/auth.service';
import { AuthController } from 'src/auth/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [UserController,AuthController],
  providers: [UserService, AuthService]
})
export class UserModule {}
