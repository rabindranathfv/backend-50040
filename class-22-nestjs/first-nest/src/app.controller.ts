import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // localhost:3000/
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test') // localhost:3000/test
  getTest() {
    return this.appService.getTest();
  }
}
