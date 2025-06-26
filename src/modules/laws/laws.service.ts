import { Injectable } from '@nestjs/common';

@Injectable()
export class LawsService {
  create(createDto: any) {
    return { message: 'Ley creada', data: createDto };
  }

  findAll() {
    return `This action returns all laws`;
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de ley' };
  }

  update(id: number, updateDto: any) {
    return { message: `Ley #${id} actualizada`, data: updateDto };
  }

  replace(id: number, replaceDto: any) {
    return { message: `Ley #${id} reemplazada`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Ley #${id} eliminada` };
  }
}
