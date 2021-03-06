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
                        return(<img key={idx} src={`https://raw.githubusercontent.com/LeoCoronel/pokedexReact/704e70232dad44303ef34478b29248b2d93b603c/src/img/icons/${type.type.name}.svg`} title={type.type.name} className={`poke-type ${type.type.name}`} />)
                    })}
                </div>
            </div>
                <p>#{pokemon.id}</p>
        </div>
    )
}

export default Pokemon;