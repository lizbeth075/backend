// src/modules/laws/domain/entities/law.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('laws') // Si usas esquema: @Entity('laws', { schema: 'system_legy' })
export class Law {
  @PrimaryGeneratedColumn()
  law_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  law_name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  law_number: string;

  @Column({ type: 'date', nullable: true })
  publication_date: Date;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  gazette_link: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  is_active: boolean;
}