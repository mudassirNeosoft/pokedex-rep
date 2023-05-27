import * as React from 'react';
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

jest.mock("next/router", () => require("next-router-mock"));
const mock_store = {
  pokemon: {
    allData: [],
    data: [],
    count: 0,
  },
  pokemonDetail: {
    name: "Pikachu",
    height: "100",
    weight: "250",
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/3/encounters",
  },
};

const mockStore = configureStore([thunk]);
const store = mockStore(mock_store);
describe("pokemon-list", () => {
  it("List rendered successfully", () => {
    const handleRowClick = jest.fn();
    render(
    //   <Provider store={store}>
        <Home />
    //   </Provider>
    );
    // expect(container).toMatchSnapshot();
  });

//   it("Pagination rendered successfully", () => {
//     const handleRowClick = jest.fn();
//     render(
//       <Provider store={store}>
//         <Table
//           count={mock_store.pokemon.count}
//           rows={mock_store.pokemon.data}
//           column={columns}
//           pageSize={20}
//           rowsPerPageOptions={[10]}
//           onRowClick={handleRowClick}
//           getRowId={(row: any) => row.name}
//         />
//       </Provider>
//     );
//     expect(screen.getByTestId("data-pagination")).toBeInTheDocument();
//   });
});
