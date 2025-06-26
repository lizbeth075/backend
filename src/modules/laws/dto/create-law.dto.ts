import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean, IsDateString } from 'class-validator';

export class CreateLawDto {
  @ApiProperty({ example: 'Ley de Contrato de Trabajo', description: 'Nombre de la ley' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  law_name: string;

  @ApiProperty({ example: '1234', description: 'Número de la ley', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  law_number?: string;

  @ApiProperty({ example: '2024-01-01', description: 'Fecha de publicación', required: false })
  @IsOptional()
  @IsDateString()
  publication_date?: Date;

  @ApiProperty({ example: 'Descripción de la ley', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'https://gaceta.com/ley', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  gazette_link?: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  is_active?: boolean;
}