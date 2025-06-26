import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsBoolean, IsDateString } from 'class-validator';

export class UpdateMinisterialResolutionDto {
  @ApiPropertyOptional({ example: 'RM-002', description: 'Número de la resolución' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  resolution_number?: string;

  @ApiPropertyOptional({ example: '2024-06-01', description: 'Fecha de publicación' })
  @IsOptional()
  @IsDateString()
  publication_date?: Date;

  @ApiPropertyOptional({ example: 'Nuevo nombre de la resolución' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  resolution_name?: string;

  @ApiPropertyOptional({ example: 'Nueva descripción' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://gaceta.com/resolucion-nueva' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  gazette_link?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  is_active?: boolean;
}