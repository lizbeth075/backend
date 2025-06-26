import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { MinisterialResolutionsService } from './ministerial_resolutions.service';

@Controller('ministerial-resolutions')
export class MinisterialResolutionsController {
  constructor(private readonly ministerialResolutionsService: MinisterialResolutionsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear resolución ministerial' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para crear la resolución' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDto: any) {
    return this.ministerialResolutionsService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener resolución ministerial por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la resolución ministerial' })
  @ApiOkResponse({ description: 'Resolución ministerial encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o resolución no encontrada' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: number) {
    return this.ministerialResolutionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una resolución ministerial' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la resolución ministerial' })
  @ApiOkResponse({ description: 'Resolución ministerial actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para actualizar la resolución' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return this.ministerialResolutionsService.update(id, updateDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una resolución ministerial' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la resolución ministerial' })
  @ApiOkResponse({ description: 'Resolución ministerial reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos para reemplazar la resolución' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.OK)
  async replace(@Param('id') id: number, @Body() replaceDto: any) {
    return this.ministerialResolutionsService.replace(id, replaceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una resolución ministerial' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la resolución ministerial' })
  @ApiNoContentResponse({ description: 'Resolución ministerial eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'ID inválido o resolución no encontrada' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    await this.ministerialResolutionsService.remove(id);
  }
}
