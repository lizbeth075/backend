import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { NormRelationsService } from './norm_relations.service';

@Controller('norm-relations')
export class NormRelationsController {
  constructor(private readonly normRelationsService: NormRelationsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear relación normativa' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para crear la relación' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: any) {
    return this.normRelationsService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener relación normativa por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación normativa' })
  @ApiOkResponse({ description: 'Relación normativa encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o relación no encontrada' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    return this.normRelationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una relación normativa' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación normativa' })
  @ApiOkResponse({ description: 'Relación normativa actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para actualizar la relación' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return this.normRelationsService.update(id, updateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una relación normativa' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación normativa' })
  @ApiOkResponse({ description: 'Relación normativa reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para reemplazar la relación' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async replace(@Param('id') id: number, @Body() replaceDto: any) {
    return this.normRelationsService.replace(id, replaceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relación normativa' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación normativa' })
  @ApiNoContentResponse({ description: 'Relación normativa eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o relación no encontrada' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.normRelationsService.remove(id);
  }
}
