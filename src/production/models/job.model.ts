import {v4} from 'uuid'
import { CreateJobInput } from '../inputs/job.input'
export class Job {
    id:string=v4()
    public offerId:string;
    public body:string;
    public images:string[]
    public dataList:string;
    constructor(createJobInput:CreateJobInput){
        this.offerId=createJobInput.offerId;
        this.body=createJobInput.body
        this.images=createJobInput.images
        this.dataList=createJobInput.dataList
    }
}