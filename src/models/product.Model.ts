import { DataTypes } from 'sequelize';
import { connection } from '../db/connection';

export const Product = connection.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});
