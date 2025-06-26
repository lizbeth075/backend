import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, IsInt } from 'class-validator';

export class UpdateNormRelationDto {
  @ApiPropertyOptional({ example: 1, description: 'ID de la norma de origen' })
  @IsOptional()
  @IsInt()
  origin_norm_id?: number;

  @ApiPropertyOptional({ example: 'law', description: 'Tipo de norma de origen' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  origin_norm_type?: string;

  @ApiPropertyOptional({ example: 2, description: 'ID de la norma de destino' })
  @IsOptional()
  @IsInt()
  destination_norm_id?: number;

  @ApiPropertyOptional({ example: 'decree', description: 'Tipo de norma de destino' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  destination_norm_type?: string;

  @ApiPropertyOptional({ example: 'modifies', description: 'Tipo de relación' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  relation_type?: string;
}