import { Test, TestingModule } from '@nestjs/testing';
import { PedantsTypeService } from './pedants-type.service';

describe('PedantsTypeService', () => {
  let service: PedantsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedantsTypeService],
    }).compile();

    service = module.get<PedantsTypeService>(PedantsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
