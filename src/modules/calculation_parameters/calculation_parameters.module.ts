import { Module } from '@nestjs/common';
import { CalculationParametersService } from './calculation_parameters.service';
import { CalculationParametersController } from './calculation_parameters.controller';

@Module({
  controllers: [CalculationParametersController],
  providers: [CalculationParametersService],
})
export class CalculationParametersModule {}
