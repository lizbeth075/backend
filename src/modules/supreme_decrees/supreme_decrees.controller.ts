import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { SupremeDecreesService } from './supreme_decrees.service';

@Controller('supreme-decrees')
export class SupremeDecreesController {
  constructor(private readonly supremeDecreesService: SupremeDecreesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear decreto supremo' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para crear el decreto' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: any) {
    return this.supremeDecreesService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener decreto supremo por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del decreto supremo' })
  @ApiOkResponse({ description: 'Decreto supremo encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o decreto no encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    return this.supremeDecreesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un decreto supremo' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del decreto supremo' })
  @ApiOkResponse({ description: 'Decreto supremo actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para actualizar el decreto' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return this.supremeDecreesService.update(id, updateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un decreto supremo' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del decreto supremo' })
  @ApiOkResponse({ description: 'Decreto supremo reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para reemplazar el decreto' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async replace(@Param('id') id: number, @Body() replaceDto: any) {
    return this.supremeDecreesService.replace(id, replaceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un decreto supremo' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del decreto supremo' })
  @ApiNoContentResponse({ description: 'Decreto supremo eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o decreto no encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.supremeDecreesService.remove(id);
  }
}
