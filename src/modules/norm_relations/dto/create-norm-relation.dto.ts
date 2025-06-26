import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsInt } from 'class-validator';

export class CreateNormRelationDto {
  @ApiProperty({ example: 1, description: 'ID de la norma de origen' })
  @IsNotEmpty()
  @IsInt()
  origin_norm_id: number;

  @ApiProperty({ example: 'law', description: 'Tipo de norma de origen' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  origin_norm_type: string;

  @ApiProperty({ example: 2, description: 'ID de la norma de destino' })
  @IsNotEmpty()
  @IsInt()
  destination_norm_id: number;

  @ApiProperty({ example: 'decree', description: 'Tipo de norma de destino' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  destination_norm_type: string;

  @ApiProperty({ example: 'modifies', description: 'Tipo de relación', required: false })
  @IsString()
  @MaxLength(100)
  relation_type?: string;
}