import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InsuranceCarrierService } from './insurance-carrier.service';
import { CreateInsuranceCarrierDto, UpdateInsuranceCarrierDto } from './dto';

@Controller('insurance-carrier')
export class InsuranceCarrierController {
  constructor(
    private readonly insuranceCarrierService: InsuranceCarrierService,
  ) {}

  @Post()
  async create(@Body() createInsuranceCarrierDto: CreateInsuranceCarrierDto) {
    const createdInsuranceCarrier = await this.insuranceCarrierService.create(
      createInsuranceCarrierDto,
    );

    return {
      data: createdInsuranceCarrier,
      message: 'Insurance carrier created successfully',
    };
  }

  @Get()
  async findAll() {
    const foundInsuranceCarriers = await this.insuranceCarrierService.findAll();

    return {
      data: foundInsuranceCarriers,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const foundInsuranceCarrier =
      await this.insuranceCarrierService.findOne(+id);

    return {
      data: foundInsuranceCarrier,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInsuranceCarrierDto: UpdateInsuranceCarrierDto,
  ) {
    await this.insuranceCarrierService.update(+id, updateInsuranceCarrierDto);

    return {
      message: 'Insurance carrier updated successfully',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.insuranceCarrierService.remove(+id);

    return {
      message: 'Insurance carrier deleted successfully',
    };
  }
}
