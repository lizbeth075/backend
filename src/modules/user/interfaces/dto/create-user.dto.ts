import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'juan.perez', description: 'Nombre de usuario único' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre de usuario no puede exceder los 50 caracteres' })
  username: string;

  @ApiProperty({ example: 'contraseñaSegura123', description: 'Contraseña del usuario' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  password_hash: string;

  @ApiProperty({ example: 'juan.perez@example.com', description: 'Correo electrónico del usuario', required: true })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;
}