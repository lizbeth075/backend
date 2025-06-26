import { Module } from '@nestjs/common';
import { NormRelationsService } from './norm_relations.service';
import { NormRelationsController } from './norm_relations.controller';

@Module({
  controllers: [NormRelationsController],
  providers: [NormRelationsService],
})
export class NormRelationsModule {}
