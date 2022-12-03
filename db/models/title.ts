import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';


class Title extends Model<InferAttributes<Title>, InferCreationAttributes<Title>> {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   // define association here
  // }
  declare title: string;
  declare aka_1: string;
  declare aka_2: string;
  declare adj_running_time: string;
  declare budget: string;
  declare copyright_holder: string;
  declare copyright_year: string;
  declare country_of_origin: string;
  declare dialogue_language: string;
  declare external_comments: string;
  declare genre: string;
  declare imdb_code: string;
  declare internal_comments: string;
  declare logline: string;
  declare motion_picture_association_of_america: string;
  declare number_of_episodes: number;
  declare number_of_seasons: number;
  declare original_format: string;
  declare original_language: string;
  declare production_company: string;
  declare project_code: string;
  declare project_group: string;
  declare project_type: string;
  declare rating: string;
  declare running_time: string;
  declare sales_agency: string;
  declare season: number;
  declare short_synopsis: string;
  declare status: string;
  declare subtitle_language: string;
  declare synopsis: string;
  declare title_code: string;
  declare website: string;
  declare year_completed: number;
  declare unique_id: string;
}


export default Title;

