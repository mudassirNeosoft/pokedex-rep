import { Card } from "@pokedex/components";
import React from "react";
import { useSelector } from "react-redux";
import { AppStore, wrapper } from "../store/configure";
import { fetchPockenDetail, selectPokemonDetail } from "../store/pokeDetail";
import { useRouter } from "next/router";

const PokemonDetails = () => {
  const details: any = useSelector(selectPokemonDetail);
  const router = useRouter();
  console.log({ details });
  return (
    <>
    <div style={{textAlign:'left', margin:'1rem'}}>
      <button className="back" onClick={() => router.back()}>
        BACK
      </button>
    </div>
    <div style={{display:'grid', placeContent:'center'}}>
      <Card
        name={details?.name}
        height={details?.height}
        weight={details?.weight}
        location={details?.location_area_encounters}
        abilities={details?.abilities ?? []}
        image = {details?.id && `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${details?.id}.svg`}
      />
    </div>
    </>
  );
};
export default PokemonDetails;

export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) => async (context) => {
  
    const { params }: any = context;
    await store.dispatch(fetchPockenDetail(params?.name));
    return {
      props: {},
    };
  }
);
