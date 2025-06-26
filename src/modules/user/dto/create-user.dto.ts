import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'juan.perez', description: 'Nombre de usuario opcional' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  username?: string;

  @ApiProperty({ example: 'contraseñaSegura123', description: 'Contraseña del usuario' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  password_hash: string;

  @ApiProperty({ example: 'juan.perez@example.com', description: 'Correo electrónico del usuario' })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @ApiProperty({ example: 'public', description: "Tipo de usuario ('public', 'admin')", required: false })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  user_type?: string;
}