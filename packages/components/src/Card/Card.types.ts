export type IAbilityProp = {
  ability: {
    name: string;
    url: string;
  };
};
export interface cardProps {
  name: string;
  height?: number;
  weight?: number;
  location?: string;
  abilities?: IAbilityProp[];
  image?:string;
}
