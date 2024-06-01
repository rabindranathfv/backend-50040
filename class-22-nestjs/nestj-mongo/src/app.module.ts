import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import LoggerMiddleware from './middleware/logger.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PetsModule } from './pets/pets.module';

const DB_NAME = `MongoNestAPI`;
const DB_PORT = 27017;
const DB_HOST = 'localhost';

@Module({
  imports: [
    // MongooseModule.forRoot(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
      }),
    }),
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}.local`,
      isGlobal: true,
    }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      {
        path: `users`,
        method: RequestMethod.ALL,
      },
      {
        path: `pets`,
        method: RequestMethod.GET,
      },
    );
  }
}
