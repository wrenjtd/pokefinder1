import React from 'react';
import { PokeData } from '../App';

interface PokeDisplayProps {
    pokeData: PokeData;
}

const PokeDisplayComponent: React.FC<PokeDisplayProps> = (props) => {
    return (
        <section id="poke-display-section">
            <h2 id="poke-name">#{props.pokeData.id} {props.pokeData.name}</h2>
            <img 
                id="poke-img"
                src={props.pokeData.image}    
            ></img>
        </section>
    )
}

export default PokeDisplayComponent;