import { Controller, Get } from '@nestjs/common';
import { Message } from '../models/message.model';
import { MessageService } from '../services/message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService:MessageService){}


    @Get()
    getMessage():Message{
        return this.messageService.getMessage();
    }
}
