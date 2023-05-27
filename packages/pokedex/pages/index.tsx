import type { NextPage } from "next";
import { IPokeList, IResult } from "../types/index.types";
import { DataTable } from "@pokedex/components";
import { AppDispatch, AppStore, wrapper } from "../store/configure";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPockeList,
  isLoadingPokemon,
  pokemonList,
  selectPagination,
  selectPokemonCount,
  selectPokemonListData,
  setAllData,
  setPagination
} from "../store/pokeList";
// import {GridColDef} from '"@mui/x-data-grid"'
import { Card } from "@pokedex/components";
import { useRouter } from "next/router";
import { fetchPokemonList } from "@pokedex/utils";
import { useState } from "react";
import { Dispatch } from "@reduxjs/toolkit";
const PAGE_SIZE = 10;
interface IPageModel{
  page:number;
  pageSize:number
}
const Home: NextPage= () => {
  const columns: any = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "url",
      headerName: "Url",
      flex: 1,
    },
  ];
  const router = useRouter();
  const dispatch = useDispatch() as AppDispatch;
  const pokemonList = useSelector(selectPokemonListData);
  const count = useSelector(selectPokemonCount);
  const isLoading = useSelector(isLoadingPokemon);
  const paginationModel = useSelector(selectPagination)
  console.log("🚀 ~ file: index.tsx:48 ~ paginationModel:", paginationModel)
  
  const [pageModel, setPageModel] = useState<IPageModel>({page:0, pageSize:PAGE_SIZE})
  const handleRowClick = (row:any) => {
    router.push(`/${row.row.name}`);
  };
const handlePaginationChange = async(value:IPageModel)=>{
  console.log('pageSize',value)
  dispatch(fetchPockeList(value.page+1, value.pageSize))
  dispatch(setPagination({page:value.page, pageSize:value.pageSize}))
}
  return (
    <div>
      <DataTable
        rows={pokemonList}
        column={columns}
        pageSize={1}
        onRowClick={handleRowClick}
        getRowId={(e) => e.name}
        rowCount={count}
        isLoading={isLoading}
        pageSizeOptions={[]}
        paginationModel={paginationModel}
        paginationModelChange={handlePaginationChange}
        page={1}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store:AppStore) =>
    async ({}) => {
      const paginationModel = store.getState().pokemon.pagination;
      console.log("🚀 ~ file: index.tsx:84 ~ paginationModel:", paginationModel)
      await store.dispatch(fetchPockeList(paginationModel.page>0?paginationModel.page:1,paginationModel.pageSize))
      return {
        props: {},
      };
    }
);
