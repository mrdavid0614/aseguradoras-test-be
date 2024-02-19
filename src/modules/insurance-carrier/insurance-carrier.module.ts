import { Module } from '@nestjs/common';
import { InsuranceCarrierService } from './insurance-carrier.service';
import { InsuranceCarrierController } from './insurance-carrier.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { InsuranceCarrierEntity } from './entities/insurance-carrier.entity';

@Module({
  imports: [SequelizeModule.forFeature([InsuranceCarrierEntity])],
  controllers: [InsuranceCarrierController],
  providers: [InsuranceCarrierService],
})
export class InsuranceCarrierModule {}
