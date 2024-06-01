import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // --> localhost:3000/users/
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get() // --> localhost:3000/users/
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id') // --> localhost:3000/users/:id
  findOne(@Param('id') id: string) {
    console.log(
      '🚀 ~ file: users.controller.ts:30 ~ UsersController ~ findOne ~ id:',
      id,
      typeof id,
    );

    return this.usersService.findOne(+id);
  }

  @Put(':id') // --> localhost:3000/users/:id
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(
      '🚀 ~ file: users.controller.ts:35 ~ UsersController ~ update ~ id:',
      id,
    );

    console.log(
      '🚀 ~ file: users.controller.ts:35 ~ UsersController ~ update ~ updateUserDto:',
      updateUserDto,
      typeof updateUserDto,
    );

    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id') // --> localhost:3000/users/:id
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
