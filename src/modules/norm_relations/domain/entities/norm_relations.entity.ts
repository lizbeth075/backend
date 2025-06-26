// src/modules/norm_relations/domain/entities/norm_relation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('norm_relations') // Si usas esquema: @Entity('norm_relations', { schema: 'system_legy' })
export class NormRelation {
  @PrimaryGeneratedColumn()
  relation_id: number;

  @Column({ type: 'int', nullable: false })
  origin_norm_id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  origin_norm_type: string; // 'law', 'decree', 'resolution'

  @Column({ type: 'int', nullable: false })
  destination_norm_id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  destination_norm_type: string; // 'law', 'decree', 'resolution'

  @Column({ type: 'varchar', length: 100, nullable: true })
  relation_type: string; // 'modifies', 'complements', 'repeals', 'regulates'
}
