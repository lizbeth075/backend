import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean, IsDateString } from 'class-validator';

export class CreateMinisterialResolutionDto {
  @ApiProperty({ example: 'RM-001', description: 'Número de la resolución' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  resolution_number: string;

  @ApiProperty({ example: '2024-01-01', description: 'Fecha de publicación', required: false })
  @IsOptional()
  @IsDateString()
  publication_date?: Date;

  @ApiProperty({ example: 'Nombre de la resolución', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  resolution_name?: string;

  @ApiProperty({ example: 'Descripción de la resolución', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'https://gaceta.com/resolucion', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  gazette_link?: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  is_active?: boolean;
}