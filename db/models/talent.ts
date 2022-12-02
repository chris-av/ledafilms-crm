'use strict';

import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

class Talent extends Model<InferAttributes<Talent>, InferCreationAttributes<Talent>> {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   // define association here
  // }
  declare talent_full_name: string;
  declare role: string;
  declare unique_id: string;
}


export default Talent;

