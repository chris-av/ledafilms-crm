export enum Roles {
  Cast = 'Cast',
  Director = 'Director',
  Producer = 'Producer',
  Writer = 'Writer',
}


export interface ITalent {
  talent_full_name: string,
  role: Roles,
  unique_id: string,
}

export interface ITalents extends Array<ITalent>{};

