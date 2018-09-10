import React, { Component } from 'react';

import FakeData from './fake-database'

export default class FeaturedPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {pokemon: null};
  }

  componentDidMount() {
    const Pokemon = FakeData.pokemon.find(mon => mon.id === this.props.featured);
    this.setState({pokemon: Pokemon});
  }

  render() {
    const {pokemon} = this.state;
    if (!pokemon) {
      return null;
    }
    return (
      <div>
        <img src={pokemon.ThumbnailImage} />
        <h1 className="name">{pokemon.name}</h1>
        <p>{pokemon.number}</p>
      </div>
    );
  }
}
