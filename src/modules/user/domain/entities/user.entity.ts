// src/modules/user/domain/entities/user.entity.ts
import { Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'users', schema: 'public' }) // Asegúrate de que sea 'public'
@Unique(['email']) 
export class User {
  @PrimaryGeneratedColumn() 
  @Expose()
  user_id: number; // Coincide con 'user_id' de tu DB

  @Column({ type: 'varchar', length: 100, nullable: true }) 
  @Expose()
  username: string; // Coincide con 'username' de tu DB

  // Si tienes una columna para la contraseña en tu DB, debe ir aquí, por ejemplo:
  @Column({ type: 'varchar', length: 255, nullable: false })
  @Expose()
  password_hash: string; // O el nombre que uses en tu DB

  @Column({ type: 'varchar', length: 255, nullable: false }) 
  @Expose()
  email: string; // Coincide con 'email' de tu DB

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) 
  @Expose()
  registration_date: Date; // Coincide con 'registration_date' de tu DB

  @Column({ type: 'timestamp', nullable: true }) 
  @Expose()
  last_access: Date; // Coincide con 'last_access' de tu DB

  @Column({ type: 'varchar', length: 50, default: 'public', nullable: false }) 
  @Expose()
  user_type: string; // Coincide con 'user_type' de tu DB
}