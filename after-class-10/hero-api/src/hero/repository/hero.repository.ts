import { CreateHeroDto } from '../dto/create-hero.dto';
import { Hero } from '../schema/hero.schema';
import { UpdateHeroDto } from '../dto/update-hero.dto';

export const HERO_REPOSITORY = 'HeroRepository';

export interface HeroRepository {
  createHero(createHeroDto: CreateHeroDto): Promise<Hero>;
  findAllHero(): Promise<Hero[]>;
  findHero(id: string);
  deleteHero(id: string);
  updateHero(id: string, updateHeroDto: UpdateHeroDto);
}
