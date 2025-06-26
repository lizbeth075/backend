import { Module } from '@nestjs/common';
import { SupremeDecreesService } from './supreme_decrees.service';
import { SupremeDecreesController } from './supreme_decrees.controller';

@Module({
  controllers: [SupremeDecreesController],
  providers: [SupremeDecreesService],
})
export class SupremeDecreesModule {}
