import { Injectable } from '@nestjs/common';
import { Message } from '../models/message.model';

@Injectable()
export class MessageService {
    messages:Message[]=[];


    addMessage(message:Message):void{
        this.messages.unshift(message)
    }
    getMessage():Message{
        return this.messages.pop();
    }
}
