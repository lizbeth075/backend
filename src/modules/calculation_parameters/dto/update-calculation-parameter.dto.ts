import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCalculationParameterDto {
  @ApiPropertyOptional({ example: 'Sueldo mínimo', description: 'Nombre del parámetro' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  parameter_name?: string;

  @ApiPropertyOptional({ example: '2500', description: 'Valor del parámetro' })
  @IsOptional()
  @IsString()
  parameter_value?: string;
}