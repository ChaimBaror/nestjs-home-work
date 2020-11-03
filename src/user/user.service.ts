import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  user: CreateUserDto[] = [{ id: '1', username: "test", password: "test", firstName: "test", lastName: "Testing" }]
  constructor() {
    const oneuser = { id: '2', username: "test2", password: "test2", firstName: "test2", lastName: "Testing2" }
    this.user.push(oneuser)
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.user;
  }

  findOne(id: string) {
    return this.user.find(user => user.id === id);
  }

  findUser(username) {
    return this.user.find(user => user.username)

  }

}
