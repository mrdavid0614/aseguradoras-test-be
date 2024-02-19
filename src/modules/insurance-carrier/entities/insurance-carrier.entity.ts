import { Model, Table, Column } from 'sequelize-typescript';
import { InsuranceCarrier } from '../interfaces/insurance-carrier';
import { CreateInsuranceCarrierDto } from '../dto/create-insurance-carrier.dto';

@Table({
  tableName: 'insurance-carrier',
})
export class InsuranceCarrierEntity extends Model<
  InsuranceCarrier,
  CreateInsuranceCarrierDto
> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  logo: string;
}
