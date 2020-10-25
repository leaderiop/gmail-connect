import {v4} from 'uuid'
import { BodyModel } from './body.model'
export class Message {
    id:string=v4()
    constructor(
        public readonly name:string,
        public readonly to:string,
        public readonly subject:string,
        public readonly body:BodyModel
    ){}
}