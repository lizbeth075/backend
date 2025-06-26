import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsBoolean, IsDateString } from 'class-validator';

export class UpdateSupremeDecreeDto {
  @ApiPropertyOptional({ example: 'DS-002', description: 'Número del decreto' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  decree_number?: string;

  @ApiPropertyOptional({ example: '2024-06-01', description: 'Fecha de publicación' })
  @IsOptional()
  @IsDateString()
  publication_date?: Date;

  @ApiPropertyOptional({ example: 'Nuevo nombre del decreto' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  decree_name?: string;

  @ApiPropertyOptional({ example: 'Nueva descripción' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://gaceta.com/decreto-nuevo' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  gazette_link?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  is_active?: boolean;
}