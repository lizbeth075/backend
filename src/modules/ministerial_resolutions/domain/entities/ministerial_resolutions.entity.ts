// src/modules/ministerial_resolutions/domain/entities/ministerial_resolution.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ministerial_resolutions') // Si usas esquema: @Entity('ministerial_resolutions', { schema: 'system_legy' })
export class MinisterialResolution {
  @PrimaryGeneratedColumn()
  resolution_id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  resolution_number: string;

  @Column({ type: 'date', nullable: true })
  publication_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  resolution_name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  gazette_link: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  is_active: boolean;
}