import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dbConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: './data.sqlite3',
  autoLoadModels: true,
  synchronize: true,
};
