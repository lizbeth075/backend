import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDateString, IsInt } from 'class-validator';

export class CreatePerformedCalculationDto {
  @ApiPropertyOptional({ example: 1, description: 'ID del usuario' })
  @IsOptional()
  @IsInt()
  user_id?: number;

  @ApiProperty({ example: '2024-06-26', description: 'Fecha del cálculo', required: false })
  @IsOptional()
  @IsDateString()
  calculation_date?: Date;

  @ApiProperty({ example: 'liquidacion', description: 'Tipo de cálculo' })
  @IsNotEmpty()
  @IsString()
  calculation_type: string;

  @ApiPropertyOptional({ example: 3000, description: 'Sueldo mensual' })
  @IsOptional()
  @IsNumber()
  monthly_salary?: number;

  @ApiPropertyOptional({ example: '2020-01-01', description: 'Fecha de contratación' })
  @IsOptional()
  @IsDateString()
  hire_date?: Date;

  @ApiPropertyOptional({ example: '2024-01-01', description: 'Fecha de terminación' })
  @IsOptional()
  @IsDateString()
  termination_date?: Date;

  @ApiPropertyOptional({ example: 5, description: 'Años de servicio' })
  @IsOptional()
  @IsInt()
  years_of_service?: number;

  @ApiPropertyOptional({ example: 3, description: 'Meses de servicio' })
  @IsOptional()
  @IsInt()
  months_of_service?: number;

  @ApiPropertyOptional({ example: 10, description: 'Días de servicio' })
  @IsOptional()
  @IsInt()
  days_of_service?: number;

  @ApiPropertyOptional({ example: 'Renuncia', description: 'Motivo de terminación' })
  @IsOptional()
  @IsString()
  termination_reason?: string;

  @ApiPropertyOptional({ example: 5000, description: 'Monto calculado' })
  @IsOptional()
  @IsNumber()
  calculated_amount?: number;

  @ApiPropertyOptional({ example: { detalle: 'info' }, description: 'Detalles del cálculo' })
  @IsOptional()
  calculation_details?: object;
}