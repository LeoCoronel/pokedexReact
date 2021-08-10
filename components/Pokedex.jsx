import React from 'react';
import Pokemon from './Pokemon'
import Pagination from './Pagination'
import Searching from './Searching'

const Pokedex = ({pokemons, page, setPage, total, loading}) => {

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }


    return(
        <div>
            <div className="header">
                <Pagination
                onLeftClick={lastPage}
                onRightClick={nextPage}
                page={page+1} totalPages={total}/>
            </div>
            {loading ? 
                <Searching />
                : 
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon pokemon={pokemon} key={pokemon.name} />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Pokedex;