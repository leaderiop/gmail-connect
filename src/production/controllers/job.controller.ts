import { Body, Controller, Post } from '@nestjs/common';
import { CreateJobInput } from '../inputs/job.input';
import { Job } from '../models/job.model';
import { JobService } from '../services/job.service';

@Controller('job')
export class JobController {
    constructor(private readonly jobService:JobService){}

    @Post()
    creatJob(@Body() createJobInput:CreateJobInput):Job{
        return this.jobService.createJob(createJobInput)
    }
}