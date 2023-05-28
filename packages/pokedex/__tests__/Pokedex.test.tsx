import * as React from "react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

jest.mock("next/router", () => require("next-router-mock"));
const mock_store = {
  pokemon: {
    allData: [],
    data: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    ],
    count: 0,
    pagination: {
      page: 0,
      pageSize: 10,
    },
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
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("navigates to the Pokemon details page when a row is clicked", () => {
    const pushMock = jest.fn();
    const useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockImplementation(() => ({
      push: pushMock,
    }));

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    fireEvent.click(screen.getByText("bulbasaur"));
    expect(pushMock).toHaveBeenCalledWith("/bulbasaur");
  });
});
