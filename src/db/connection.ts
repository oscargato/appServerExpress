import { Sequelize } from 'sequelize';

const connection = new Sequelize('crud', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
});

export { connection };
