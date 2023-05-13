import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerNameController } from './module-name/controller-name/controller-name.controller';

@Module({
  imports: [],
  controllers: [AppController, ControllerNameController],
  providers: [AppService],
})
export class AppModule {}
