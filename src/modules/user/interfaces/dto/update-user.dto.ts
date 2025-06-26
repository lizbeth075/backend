import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean, IsIn } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ example: 'nuevo.usuario', description: 'Nuevo nombre de usuario', required: true })
    @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
    username: string; // Optional for updates

  @ApiProperty({ example: 'nuevaContraseñaSegura456', description: 'Nueva contraseña del usuario', required: true })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  passwordHash: string; // Optional for updates (will be hashed before storing as password_hash)

  @ApiProperty({ example: 'nuevo.email@example.com', description: 'Nuevo correo electrónico del usuario', required: true })
  @IsString({ message: 'El email debe ser una cadena de texto' })
    email: string; // Optional for updates

}
