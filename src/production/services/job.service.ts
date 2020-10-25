import { Injectable } from '@nestjs/common';
import { CreateJobInput } from '../inputs/job.input';
import { Job } from '../models/job.model';
import { MessageService } from './message.service';

@Injectable()
export class JobService {
    private readonly jobs:Job[]=[];
    constructor(private readonly messageService:MessageService){}

    createJob(createJobInput:CreateJobInput):Job {
        const job=new Job(createJobInput)
        console.log(job);
        this.jobs.push(job);
        return job;
    }
}
