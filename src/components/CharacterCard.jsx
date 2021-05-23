import React from 'react'
import '../assets/components/CharacterCard.css'

const CharacterCard = (props) => {
    const character = props.character
    const click = ()=>{
        props.handleClick(character);
    }
    return (
        <div className="char-card__cont">
            <div className="char-card__img">
                <img src={character.image} alt={character.name}/>
            </div>
            <div className="char-card__info">
                <div className="charInfo">
                    <h3>{character.name}</h3>
                    <span>{`${character.status} - ${character.species}`}</span>
                </div>
                <div className="charLocation">
                    <h4>Location</h4>
                    <span>{character.location.name}</span>
                </div>
            </div>
            <div className="char-card__add">
                <button type="button" onClick={click}>Añadir a Favoritos</button>
            </div>
        </div>
    )
}

export default CharacterCard
