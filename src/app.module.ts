import { Module } from '@nestjs/common';
import { ManagementModule } from './management/management.module';
import { ReportsModule } from './reports/reports.module';
import { ProductionModule } from './production/production.module';

@Module({
  imports: [ManagementModule, ReportsModule, ProductionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
