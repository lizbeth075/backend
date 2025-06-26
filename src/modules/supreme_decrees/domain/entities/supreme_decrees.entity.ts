// src/modules/supreme_decrees/domain/entities/supreme_decree.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('supreme_decrees') // Si usas esquema: @Entity('supreme_decrees', { schema: 'system_legy' })
export class SupremeDecree {
  @PrimaryGeneratedColumn()
  decree_id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  decree_number: string;

  @Column({ type: 'date', nullable: true })
  publication_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  decree_name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  gazette_link: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  is_active: boolean;
}