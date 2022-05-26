import { Module } from '@nestjs/common';
import { PedantsTypeController } from './pedants-type.controller';
import { PedantsTypeService } from './pedants-type.service';

@Module({
  controllers: [PedantsTypeController],
  providers: [PedantsTypeService],
})
export class PedantsTypeModule {}
