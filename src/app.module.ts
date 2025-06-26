import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { typeOrmConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LawsModule } from './modules/laws/laws.module';
import { SupremeDecreesModule } from './modules/supreme_decrees/supreme_decrees.module';
import { MinisterialResolutionsModule } from './modules/ministerial_resolutions/ministerial_resolutions.module';
import { NormRelationsModule } from './modules/norm_relations/norm_relations.module';
import { PerformedCalculationsModule } from './modules/performed_calculations/performed_calculations.module';
import { CalculationParametersModule } from './modules/calculation_parameters/calculation_parameters.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot(typeOrmConfig()),
    UserModule,
    LawsModule,
    SupremeDecreesModule,
    MinisterialResolutionsModule,
    NormRelationsModule,
    PerformedCalculationsModule,
    CalculationParametersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
