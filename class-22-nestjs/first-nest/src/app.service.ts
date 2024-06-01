import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! UPDATE 2';
  }

  getTest() {
    return { message: `esto es un mensaje` };
  }
}
