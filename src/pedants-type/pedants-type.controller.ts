import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { PedantsTypeDto } from './dto/create-pedants-type.dto';
import { PedantsTypeService } from './pedants-type.service';

@Controller('pedants-type')
export class PedantsTypeController {
  constructor(private readonly pendantsService: PedantsTypeService) {}
  @Get('api')
  getPedantsType(@Query() req: Request): string {
    console.log('Param:', req);
    return this.pendantsService.getHello('JackMao');
  }

  @Post()
  createPedtansType(@Body('name') name: string, @Body('sort') sort: number) {
    console.log('body========&gt;', name, sort);
    return '新建一个挂件类型';
  }

  @Post()
  createPedtansType2(@Body() pedantsTypeDto: PedantsTypeDto) {
    console.log('body DTO========&gt;', pedantsTypeDto);
    return '新建一个挂件类型';
  }

  @Patch()
  updatePedantsType(@Query('id') id: number) {
    console.log('query=======&gt;', id);
    return '更新某一个挂件类型';
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }
}
