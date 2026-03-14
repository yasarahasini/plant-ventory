import { Test, TestingModule } from '@nestjs/testing';
import { EncyclopediaService } from './encyclopedia.service';

describe('EncyclopediaService', () => {
  let service: EncyclopediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncyclopediaService],
    }).compile();

    service = module.get<EncyclopediaService>(EncyclopediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
