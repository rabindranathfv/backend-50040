import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[];

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      first_name: createUserDto.first_name,
      last_name: createUserDto.last_name,
      email: createUserDto.email,
      password: createUserDto.password,
      avatar: createUserDto.avatar,
      id: this.users.length === 0 ? 1 : this.users.length + 1,
    };

    this.users.push(newUser);

    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user: User) => {
      return user.id === id;
    });
    console.log(
      '🚀 ~ file: users.service.ts:35 ~ UsersService ~ findOne ~ user:',
      user,
    );
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    user.first_name = updateUserDto.first_name || user.first_name;
    user.last_name = updateUserDto.last_name || user.last_name;
    user.email = updateUserDto.email || user.email;
    user.password = updateUserDto.password || user.password;
    user.avatar = updateUserDto.avatar || user.avatar;

    return user;
  }

  remove(id: string) {
    const indexDel = this.users.findIndex((u: User) => u.id === +id);

    return this.users.splice(indexDel, 1)[0];
  }
}
