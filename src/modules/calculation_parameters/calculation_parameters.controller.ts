import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { CalculationParametersService } from './calculation_parameters.service';

@Controller('calculation-parameters')
export class CalculationParametersController {
  constructor(private readonly calculationParametersService: CalculationParametersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear parámetro de cálculo' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para crear el parámetro' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: any) {
    return this.calculationParametersService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener parámetro de cálculo por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del parámetro de cálculo' })
  @ApiOkResponse({ description: 'Parámetro de cálculo encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o parámetro no encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    return this.calculationParametersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un parámetro de cálculo' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del parámetro de cálculo' })
  @ApiOkResponse({ description: 'Parámetro de cálculo actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para actualizar el parámetro' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return this.calculationParametersService.update(id, updateDto);
  }
@Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un parámetro de cálculo' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del parámetro de cálculo' })
  @ApiOkResponse({ description: 'Parámetro de cálculo reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para reemplazar el parámetro' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async replace(
    @Param('id') id: number,
    @Body() replaceDto: any
  ) {
    return this.calculationParametersService.replace(id, replaceDto);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un parámetro de cálculo' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del parámetro de cálculo' })
  @ApiNoContentResponse({ description: 'Parámetro de cálculo eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o parámetro no encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.calculationParametersService.remove(id);
  }

  
}
