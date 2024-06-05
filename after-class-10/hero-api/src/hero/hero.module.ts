import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from './schema/hero.schema';
import { HeroAdapterRepository } from './repository/hero-adapter.repository';
import { HERO_REPOSITORY } from './repository/hero.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hero.name,
        schema: HeroSchema,
      },
    ]),
  ],
  controllers: [HeroController],
  providers: [HeroService,
    {
      provide: HERO_REPOSITORY,
      useClass: HeroAdapterRepository
    }
  ],
})
export class HeroModule {}
