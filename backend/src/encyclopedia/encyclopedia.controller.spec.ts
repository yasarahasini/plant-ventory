import { Test, TestingModule } from '@nestjs/testing';
import { EncyclopediaController } from './encyclopedia.controller';

describe('EncyclopediaController', () => {
  let controller: EncyclopediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncyclopediaController],
    }).compile();

    controller = module.get<EncyclopediaController>(EncyclopediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
