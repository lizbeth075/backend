import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCalculationParameterDto {
  @ApiProperty({ example: 'Sueldo mínimo', description: 'Nombre del parámetro' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  parameter_name: string;

  @ApiProperty({ example: '2500', description: 'Valor del parámetro', required: false })
  @IsString()
  parameter_value?: string;
}