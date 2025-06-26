import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { LawsService } from './laws.service';

@Controller('laws')
export class LawsController {
  constructor(private readonly lawsService: LawsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear ley' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para crear la ley' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: any) {
    return this.lawsService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener ley por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la ley' })
  @ApiOkResponse({ description: 'Ley encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o ley no encontrada' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    return this.lawsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una ley' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la ley' })
  @ApiOkResponse({ description: 'Ley actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para actualizar la ley' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return this.lawsService.update(id, updateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una ley' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la ley' })
  @ApiOkResponse({ description: 'Ley reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para reemplazar la ley' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async replace(@Param('id') id: number, @Body() replaceDto: any) {
    return this.lawsService.replace(id, replaceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ley' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la ley' })
  @ApiNoContentResponse({ description: 'Ley eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o ley no encontrada' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.lawsService.remove(id);
  }
}
