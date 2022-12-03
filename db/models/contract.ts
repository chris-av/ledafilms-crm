import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';


class Contract extends Model<InferAttributes<Contract>, InferCreationAttributes<Contract>> {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   // define association here
  // }
  declare contract_type: string;
  declare licensor: string;
  declare distributor: string;
  declare status: string;
  declare deal_status: string;
  declare creation_date: Date;
  declare deal_type: string;
  declare mg: number;
  declare cur: string;
  declare additional_terms: string;
  declare notes: string;
  declare contract_id: string;
}


export default Contract;

