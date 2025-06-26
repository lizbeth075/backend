import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { PerformedCalculationsService } from './performed_calculations.service';

@Controller('performed-calculations')
export class PerformedCalculationsController {
  constructor(private readonly performedCalculationsService: PerformedCalculationsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear cálculo realizado' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para crear el cálculo' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: any) {
    return this.performedCalculationsService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener cálculo realizado por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del cálculo realizado' })
  @ApiOkResponse({ description: 'Cálculo realizado encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o cálculo no encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    return this.performedCalculationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un cálculo realizado' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del cálculo realizado' })
  @ApiOkResponse({ description: 'Cálculo realizado actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para actualizar el cálculo' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return this.performedCalculationsService.update(id, updateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un cálculo realizado' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del cálculo realizado' })
  @ApiOkResponse({ description: 'Cálculo realizado reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para reemplazar el cálculo' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async replace(@Param('id') id: number, @Body() replaceDto: any) {
    return this.performedCalculationsService.replace(id, replaceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cálculo realizado' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del cálculo realizado' })
  @ApiNoContentResponse({ description: 'Cálculo realizado eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o cálculo no encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.performedCalculationsService.remove(id);
  }
}
