import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createDto: CreateUserDto) {
    return { message: 'Usuario creado', data: createDto };
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de usuario' };
  }

  update(id: number, updateDto: UpdateUserDto) {
    return { message: `Usuario #${id} actualizado`, data: updateDto };
  }

  replace(id: number, replaceDto: CreateUserDto) {
    return { message: `Usuario #${id} reemplazado`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Usuario #${id} eliminado` };
  }
}
