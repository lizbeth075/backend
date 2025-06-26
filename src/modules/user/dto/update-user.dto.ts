import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'nuevo.usuario', description: 'Nuevo nombre de usuario' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  username?: string;

  @ApiPropertyOptional({ example: 'nuevaContraseñaSegura456', description: 'Nueva contraseña del usuario' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  password_hash?: string;

  @ApiPropertyOptional({ example: 'nuevo.email@example.com', description: 'Nuevo correo electrónico del usuario' })
  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  email?: string;

  @ApiPropertyOptional({ example: 'admin', description: "Tipo de usuario ('public', 'admin')" })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  user_type?: string;
}