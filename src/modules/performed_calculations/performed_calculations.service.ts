import { Injectable } from '@nestjs/common';
import { CreatePerformedCalculationDto } from './dto/create-performed-calculation.dto';
import { UpdatePerformedCalculationDto } from './dto/update-performed-calculation.dto';

@Injectable()
export class PerformedCalculationsService {
  create(createDto: CreatePerformedCalculationDto) {
    return { message: 'Cálculo realizado creado', data: createDto };
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de cálculo realizado' };
  }

  update(id: number, updateDto: UpdatePerformedCalculationDto) {
    return { message: `Cálculo realizado #${id} actualizado`, data: updateDto };
  }

  replace(id: number, replaceDto: CreatePerformedCalculationDto) {
    return { message: `Cálculo realizado #${id} reemplazado`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Cálculo realizado #${id} eliminado` };
  }
}
