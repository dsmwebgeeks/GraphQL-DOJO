import React, { Component } from 'react';
import FeaturedPokemon from './FeaturedPokemon';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FeaturedPokemon featured={5} />
        <Pokedex />
      </div>
    );
  }
}

export default App;
