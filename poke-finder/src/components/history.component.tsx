import React from 'react';
import { PokeData } from '../App';

interface HistoryComponentProps {
    pokeArr: PokeData[];
    processNewPokemonData: (pokemon: PokeData) => void;
}

const HistoryComponent: React.FC<HistoryComponentProps> = (props) => {

    const mapHistoryCard = () => {

        return props.pokeArr.map( (pokemon: PokeData) => {
            return (
                <div 
                key={pokemon.id}
                className="poke-history-card">
                    <h3>#{pokemon.id} {pokemon.name} </h3>
                    <img 
                        onClick={() => props.processNewPokemonData(pokemon)}
                        alt={`history card for previous search of ${pokemon.name}`}  
                        src={pokemon.image}>
                    </img>
                </div>
            )
        })
    }

    return (
        <section>
            <h2>History</h2>
            <ol id="history-list">
                {mapHistoryCard()}
            </ol>
        </section>
    )
}

export default HistoryComponent;