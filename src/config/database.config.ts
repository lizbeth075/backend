// src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Importa TODAS tus entidades aquí.
// Las rutas DEBEN ser relativas desde 'src/config/'
// Subimos un nivel (..) para llegar a 'src/', luego entramos en 'modules/'
import { User } from '../modules/user/domain/entities/user.entity';
import { Law } from '../modules/laws/domain/entities/laws.entity'; 
import { SupremeDecree } from '../modules/supreme_decrees/domain/entities/supreme_decrees.entity'; 
import { MinisterialResolution } from '../modules/ministerial_resolutions/domain/entities/ministerial_resolutions.entity'; 
import { NormRelation } from '../modules/norm_relations/domain/entities/norm_relations.entity'; 
import { PerformedCalculation } from '../modules/performed_calculations/domain/entities/performed_calculations.entity'; 
import { calculation_parameters } from '../modules/calculation_parameters/domain/entities/calculation_parameters.entity';
import { CalculationParametersController } from 'src/modules/calculation_parameters/calculation_parameters.controller';



export function typeOrmConfig(): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: process.env.DB_HOST ,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER ,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME, 
        schema: process.env.DB_SCHEMA , 

        // Lista TODAS tus entidades aquí
        entities: [
            User,
            Law,
            SupremeDecree,
            MinisterialResolution,
            NormRelation,
            PerformedCalculation,
            CalculationParametersController,
            calculation_parameters,
        ],
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
        dropSchema: process.env.DB_DROP_SCHEMA === 'true',
    };
}