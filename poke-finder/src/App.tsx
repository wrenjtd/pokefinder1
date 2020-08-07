import React, { useState } from 'react';
import Axios from 'axios';

import './App.css';
import HeaderComponent from './components/header.component';
import PokeDisplayComponent from './components/poke-display.component';
import InputComponent from './components/input.component';
import HistoryComponent from './components/history.component';

export interface PokeData {
  name: string;
  id: number;
  image: string;
}

const App: React.FC = () => {

  const [pokeData, setPokeData] = useState<PokeData>({
    name: 'Pikachu',
    id: 25,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  });
  const [pokeArr, setPokeArr] = useState<PokeData[]>([pokeData]);


  const updateHistory = (pokemon: PokeData) => {
    if (pokeArr.some(p => p.id === pokemon.id)) {
      const arr = [pokemon, ...pokeArr.filter(p => p.id !== pokemon.id)];
      setPokeArr(arr);
    } else {
      // Copying array and updating state with new array
      const newArr = [pokemon, ...pokeArr];
      setPokeArr(newArr);
    }
  }

  const updateDisplayPokemon = (pokemon: PokeData) => {
    setPokeData(pokemon);
  }

  const processNewPokemonData = (pokemon: PokeData) => {
        // Updating state for main display pokemon
        updateDisplayPokemon(pokemon);

        updateHistory(pokemon);
  }

  const userSubmitReceived = (str: string): void => {
    const url = `https://pokeapi.co/api/v2/pokemon/${str}/`;

    // Axios.post('http://localhost:8080/cors-demo/cors')
    //   .then(response => {
    //     console.log(response);
    //   }).catch(err => console.log(err))

    Axios.get(url)
      .then(response => {
        const rawName = response.data.name;
        const name = rawName[0].toUpperCase() + rawName.slice(1);

        const id = response.data.id;
        const image = response.data.sprites.front_default;

        processNewPokemonData({ name, id, image });

      }).catch(err => {
        console.log(err);
      });
  }



  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <PokeDisplayComponent
        pokeData={pokeData}
      ></PokeDisplayComponent>
      <InputComponent
        userSubmitReceived={(str: string) => userSubmitReceived(str)}
      ></InputComponent>
      <HistoryComponent
        pokeArr={pokeArr}
        processNewPokemonData={processNewPokemonData}
      ></HistoryComponent>
    </div>
  );
}

export default App;
