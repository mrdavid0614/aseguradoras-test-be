import { PartialType } from '@nestjs/mapped-types';
import { CreateInsuranceCarrierDto } from './create-insurance-carrier.dto';

export class UpdateInsuranceCarrierDto extends PartialType(
  CreateInsuranceCarrierDto,
) {}
