import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHeroDto } from '../dto/create-hero.dto';
import { UpdateHeroDto } from '../dto/update-hero.dto';
import { Hero } from '../schema/hero.schema';
import { HeroRepository } from './hero.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HeroAdapterRepository implements HeroRepository {
  constructor(
    @InjectModel(Hero.name) private readonly heroModel: Model<Hero>,
  ) {}
  async createHero(createHeroDto: CreateHeroDto): Promise<Hero> {
    try {
      return await this.heroModel.create(createHeroDto);
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findAllHero(): Promise<Hero[]> {
    try {
      return await this.heroModel.find();
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findHero(id: string) {
    try {
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async deleteHero(id: string) {
    try {
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateHero(id: string, updateHeroDto: UpdateHeroDto) {
    try {
    } catch (error) {
      throw new HttpException(
        'INTERNAL SERVER ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
