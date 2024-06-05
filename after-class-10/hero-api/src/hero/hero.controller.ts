import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  NotFoundException
} from '@nestjs/common';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Hero } from './schema/hero.schema';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post() // localhost:3000/hero --> localhost:3000/api/v1/hero
  create(@Body() createHeroDto: CreateHeroDto) {
    console.log(
      '🚀 ~ file: hero.controller.ts:20 ~ HeroController ~ create ~ createHeroDto:',
      createHeroDto,
    );

    return this.heroService.create(createHeroDto);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'get all Heros',
    type: [Hero],
  })
  @Get()
  findAll() {
    return this.heroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('ID DATA', id)
    throw new NotFoundException(`this hero does not exist`)
    console.log('GET OUT', id)
    // return this.heroService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroService.update(+id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroService.remove(+id);
  }
}
