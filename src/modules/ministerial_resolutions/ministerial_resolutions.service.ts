import { Injectable } from '@nestjs/common';
import { CreateMinisterialResolutionDto } from './dto/create-ministerial-resolution.dto';
import { UpdateMinisterialResolutionDto } from './dto/update-ministerial-resolution.dto';

@Injectable()
export class MinisterialResolutionsService {
  create(createDto: CreateMinisterialResolutionDto) {
    return { message: 'Resolución ministerial creada', data: createDto };
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de resolución ministerial' };
  }

  update(id: number, updateDto: UpdateMinisterialResolutionDto) {
    return { message: `Resolución ministerial #${id} actualizada`, data: updateDto };
  }

  replace(id: number, replaceDto: CreateMinisterialResolutionDto) {
    return { message: `Resolución ministerial #${id} reemplazada`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Resolución ministerial #${id} eliminada` };
  }
}
