import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean, IsDateString } from 'class-validator';

export class CreateSupremeDecreeDto {
  @ApiProperty({ example: 'DS-001', description: 'Número del decreto' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  decree_number: string;

  @ApiProperty({ example: '2024-01-01', description: 'Fecha de publicación', required: false })
  @IsOptional()
  @IsDateString()
  publication_date?: Date;

  @ApiProperty({ example: 'Nombre del decreto', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  decree_name?: string;

  @ApiProperty({ example: 'Descripción del decreto', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'https://gaceta.com/decreto', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  gazette_link?: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  is_active?: boolean;
}