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

export type PokemonData = {
  name: string;
  height: number;
  weight: number;
  location_area_encounters: string;
};