import { Module } from '@nestjs/common';
import { MinisterialResolutionsService } from './ministerial_resolutions.service';
import { MinisterialResolutionsController } from './ministerial_resolutions.controller';

@Module({
  controllers: [MinisterialResolutionsController],
  providers: [MinisterialResolutionsService],
})
export class MinisterialResolutionsModule {}
