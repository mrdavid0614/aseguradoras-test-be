import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { dbConfig } from './database';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsuranceCarrierModule } from './modules/insurance-carrier/insurance-carrier.module';

@Module({
  imports: [InsuranceCarrierModule, SequelizeModule.forRoot(dbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
