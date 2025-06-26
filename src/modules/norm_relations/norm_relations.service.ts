import { Injectable } from '@nestjs/common';
import { CreateNormRelationDto } from './dto/create-norm-relation.dto';
import { UpdateNormRelationDto } from './dto/update-norm-relation.dto';

@Injectable()
export class NormRelationsService {
  create(createDto: CreateNormRelationDto) {
    return { message: 'Relación normativa creada', data: createDto };
  }

  findAll() {
    return `This action returns all norm relations`;
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de relación normativa' };
  }

  update(id: number, updateDto: UpdateNormRelationDto) {
    return { message: `Relación normativa #${id} actualizada`, data: updateDto };
  }

  replace(id: number, replaceDto: CreateNormRelationDto) {
    return { message: `Relación normativa #${id} reemplazada`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Relación normativa #${id} eliminada` };
  }
}
