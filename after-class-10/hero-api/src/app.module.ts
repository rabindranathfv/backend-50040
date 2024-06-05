import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { MongooseModule } from '@nestjs/mongoose';

const DB_NAME = `MongoNestHeroAPI`;
const DB_PORT = 27017;
const DB_HOST = 'localhost';

@Module({
  imports: [
    HeroModule,
    MongooseModule.forRoot(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
