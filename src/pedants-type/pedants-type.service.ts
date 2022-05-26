import { Injectable } from '@nestjs/common';

@Injectable()
export class PedantsTypeService {
  getHello(name: string): string {
    return 'Hello World!' + name;
  }
}
