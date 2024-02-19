import { Injectable } from '@nestjs/common';
import { CreateInsuranceCarrierDto } from './dto/create-insurance-carrier.dto';
import { UpdateInsuranceCarrierDto } from './dto/update-insurance-carrier.dto';
import { InjectModel } from '@nestjs/sequelize';
import { InsuranceCarrierEntity } from './entities/insurance-carrier.entity';

@Injectable()
export class InsuranceCarrierService {
  constructor(
    @InjectModel(InsuranceCarrierEntity)
    private insuranceCarrierRepository: typeof InsuranceCarrierEntity,
  ) {}

  async create(createInsuranceCarrierDto: CreateInsuranceCarrierDto) {
    const createdInsuranceCarrier =
      await this.insuranceCarrierRepository.create(createInsuranceCarrierDto);

    return createdInsuranceCarrier;
  }

  async findAll() {
    const insuranceCarriers = await this.insuranceCarrierRepository.findAll();

    return insuranceCarriers;
  }

  async findOne(id: number) {
    const foundInsuranceCarrier = await this.insuranceCarrierRepository.findOne(
      { where: { id } },
    );

    return foundInsuranceCarrier;
  }

  async update(
    id: number,
    updateInsuranceCarrierDto: UpdateInsuranceCarrierDto,
  ) {
    await this.insuranceCarrierRepository.update(updateInsuranceCarrierDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    await this.insuranceCarrierRepository.destroy({ where: { id } });
  }
}
