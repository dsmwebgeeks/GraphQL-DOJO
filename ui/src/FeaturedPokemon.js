import React, { Component } from 'react';
import { loadPokemon } from './requests';

export default class FeaturedPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {pokemon: null};
  }

  async componentDidMount() {
    const {Pokemon} = await loadPokemon(this.props.featured);
    this.setState({pokemon: Pokemon});
    console.log(Pokemon)
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
