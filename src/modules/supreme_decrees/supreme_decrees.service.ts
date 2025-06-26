import { Injectable } from '@nestjs/common';
import { CreateSupremeDecreeDto } from './dto/create-supreme-decree.dto';
import { UpdateSupremeDecreeDto } from './dto/update-supreme-decree.dto';

@Injectable()
export class SupremeDecreesService {
  create(createDto: CreateSupremeDecreeDto) {
    return { message: 'Decreto supremo creado', data: createDto };
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de decreto supremo' };
  }

  update(id: number, updateDto: UpdateSupremeDecreeDto) {
    return { message: `Decreto supremo #${id} actualizado`, data: updateDto };
  }

  replace(id: number, replaceDto: CreateSupremeDecreeDto) {
    return { message: `Decreto supremo #${id} reemplazado`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Decreto supremo #${id} eliminado` };
  }
}
