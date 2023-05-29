export interface IResult{
    name:string,
    url:string
}
export interface IPokeList {
  count: number;
  next: string;
  previous: string;
  results: IResult[];
}
export type IAbilityProp = {
  ability: {
    name: string;
    url: string;
  };
};
export type IPokemonData = {
  id:number;
  name: string;
  height?: number;
  weight?: number;
  location_area_encounters?: string;
  abilities?: IAbilityProp[];
  image?:string;
  
};
export interface IPageModel {
  page: number;
  pageSize: number;
}
