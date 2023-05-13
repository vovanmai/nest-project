import { Test, TestingModule } from '@nestjs/testing';
import { ControllerNameController } from './controller-name.controller';

describe('ControllerNameController', () => {
  let controller: ControllerNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerNameController],
    }).compile();

    controller = module.get<ControllerNameController>(ControllerNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
