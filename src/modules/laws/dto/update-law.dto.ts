import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsBoolean, IsDateString } from 'class-validator';

export class UpdateLawDto {
  @ApiPropertyOptional({ example: 'Ley modificada', description: 'Nombre de la ley' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  law_name?: string;

  @ApiPropertyOptional({ example: '5678', description: 'Número de la ley' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  law_number?: string;

  @ApiPropertyOptional({ example: '2024-06-01', description: 'Fecha de publicación' })
  @IsOptional()
  @IsDateString()
  publication_date?: Date;

  @ApiPropertyOptional({ example: 'Nueva descripción', description: 'Descripción de la ley' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://gaceta.com/ley-modificada' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  gazette_link?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  is_active?: boolean;
}