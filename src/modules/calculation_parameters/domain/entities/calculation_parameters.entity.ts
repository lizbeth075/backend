// src/modules/calculation_parameters/domain/entities/calculation_parameter.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('calculation_parameters', { schema: 'public' }) // ¡IMPORTANTE! Asegúrate de que el esquema sea 'public' aquí para consistencia con tu DB
export class calculation_parameters { // <--- ¡Esta línea es la clave para la exportación y el nombre de la clase!
  @PrimaryGeneratedColumn()
  parameter_id: number; // Suponiendo este como tu PK; ajusta si es diferente

  @Column({ type: 'varchar', length: 255, nullable: false })
  parameter_name: string; // Ejemplo de columna

  @Column({ type: 'text', nullable: true })
  parameter_value: string; // Ejemplo de columna

  // Agrega aquí todas las demás columnas que tengas en tu tabla 'calculation_parameters' en PostgreSQL.
  // Es crucial que los nombres de las propiedades (ej. 'parameter_id', 'parameter_name')
  // coincidan exactamente con los nombres de las columnas en tu base de datos.
}