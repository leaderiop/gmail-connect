import { Module } from '@nestjs/common';
import { JobController } from './controllers/job.controller';
import { MessageController } from './controllers/message.controller';
import { SendController } from './controllers/send.controller';
import { JobService } from './services/job.service';
import { MessageService } from './services/message.service';
import { SendService } from './services/send.service';
@Module({
  controllers: [SendController,MessageController,JobController],
  providers:[SendService,MessageService,JobService]
})
export class ProductionModule {}
