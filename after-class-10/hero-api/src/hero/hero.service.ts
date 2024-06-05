import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HERO_REPOSITORY } from './repository/hero.repository';
import { HeroAdapterRepository } from './repository/hero-adapter.repository';

@Injectable()
export class HeroService {
  constructor(
    @Inject(HERO_REPOSITORY)
    private readonly heroRepository: HeroAdapterRepository,
  ) {}
  async create(createHeroDto: CreateHeroDto) {
    try {
      return await this.heroRepository.createHero(createHeroDto);
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.heroRepository.findAllHero();
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {
    try {
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
