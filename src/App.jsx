import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from '../components/Navbar.jsx'
import Searchbar from '../components/Searchbar'
import Pokedex from '../components/Pokedex'
import Poke404 from '../components/Poke404'
import {getPokemons, getPokemonData, searchPokemon} from '../api'

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (error) {
      console.log(error)
    }
  }

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if(!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  }

  useEffect(() => {
    if(!searching) {
      fetchPokemons();
    }
  }, [page])

  return (
    <>
      <Navbar />
      <div className="App">
      </div>
      <Searchbar onSearch={onSearch} />
      {notFound ? 
        <Poke404 />
        :
        <Pokedex 
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        /> }
    </>
    
  )
}

export default App
