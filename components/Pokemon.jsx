import React from 'react';
// Pure component (sin estado, solo para mostrar información);
const Pokemon = ({pokemon}) => {

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__header__img">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div className="card__header__title">
                    <p className="card__header__name">{pokemon.name}</p>
                    {pokemon.types.map((type, idx) => {
                        return(<img key={idx} src={`https://github.com/LeoCoronel/pokedexReact/tree/main/src/img/icons/${type.type.name}.svg`} title={type.type.name} className={`poke-type ${type.type.name}`} />)
                    })}
                </div>
            </div>
                <p>#{pokemon.id}</p>
        </div>
    )
}

export default Pokemon;