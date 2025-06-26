import { Injectable } from '@nestjs/common';
import { CreateCalculationParameterDto } from './dto/create-calculation-parameter.dto';
import { UpdateCalculationParameterDto } from './dto/update-calculation-parameter.dto';

@Injectable()
export class CalculationParametersService {
  create(createDto: CreateCalculationParameterDto) {
    return { message: 'Parámetro de cálculo creado', data: createDto };
  }

  findOne(id: number) {
    return { id, name: 'Ejemplo de parámetro de cálculo' };
  }

  update(id: number, updateDto: UpdateCalculationParameterDto) {
    return { message: `Parámetro de cálculo #${id} actualizado`, data: updateDto };
  }

  replace(id: number, replaceDto: CreateCalculationParameterDto) {
    return { message: `Parámetro de cálculo #${id} reemplazado`, data: replaceDto };
  }

  remove(id: number) {
    return { message: `Parámetro de cálculo #${id} eliminado` };
  }
}
