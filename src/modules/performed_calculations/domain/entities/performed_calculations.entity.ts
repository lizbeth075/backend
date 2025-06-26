// src/modules/performed_calculations/domain/entities/performed_calculation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
// RUTA CORREGIDA: sube tres niveles hasta 'src/modules/' y luego baja a 'user/domain/entities'
import { User } from '../../../user/domain/entities/user.entity';

@Entity('performed_calculations') // Si usas esquema: @Entity('performed_calculations', { schema: 'system_legy' })
export class PerformedCalculation {
  @PrimaryGeneratedColumn()
  calculation_id: number;

  @Column({ type: 'int', nullable: true })
  user_id: number; // Columna para la FK

  @ManyToOne(() => User, user => user.user_id, { nullable: true }) // Relación Many-to-One con User
  @JoinColumn({ name: 'user_id' }) // Especifica la columna FK en esta tabla
  user: User; // Propiedad para acceder al objeto User relacionado

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  calculation_date: Date;

  @Column({ type: 'varchar', length: 50, nullable: false })
  calculation_type: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  monthly_salary: number; // Usamos number para DECIMAL en TypeScript

  @Column({ type: 'date', nullable: true })
  hire_date: Date;

  @Column({ type: 'date', nullable: true })
  termination_date: Date;

  @Column({ type: 'int', nullable: true })
  years_of_service: number;

  @Column({ type: 'int', nullable: true })
  months_of_service: number;

  @Column({ type: 'int', nullable: true })
  days_of_service: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  termination_reason: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  calculated_amount: number;

  @Column({ type: 'jsonb', nullable: true })
  calculation_details: object;
}
