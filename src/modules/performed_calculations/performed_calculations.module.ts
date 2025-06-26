import { Module } from '@nestjs/common';
import { PerformedCalculationsService } from './performed_calculations.service';
import { PerformedCalculationsController } from './performed_calculations.controller';

@Module({
  controllers: [PerformedCalculationsController],
  providers: [PerformedCalculationsService],
})
export class PerformedCalculationsModule {}
