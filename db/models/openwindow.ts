import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

class OpenWindow extends Model<InferAttributes<OpenWindow>, InferCreationAttributes<OpenWindow>> {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   // define association here
  // }
  declare territory: string;
  declare right: string;
  declare license_type: string;
  declare start_date: Date;
  declare end_date: Date;
  declare start_confirmed: boolean;
  declare end_confirmed: boolean;
  declare right_group: string;
  declare unique_id: string;
  declare contract_id: string;

}


export default OpenWindow;

