import React from 'react';
const {useState} = React;
import {searchPokemon} from '../api'

const Searchbar = ({onSearch}) => {

    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState();

    const inputHandler = (evt) => {
        setSearch(evt.target.value);
        if(evt.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Buscar pokémon..." onChange={inputHandler} />
                <button onClick={onClick} className="searchbar-btn">Search</button>
            </div>
        </div>

    )
}

export default Searchbar;