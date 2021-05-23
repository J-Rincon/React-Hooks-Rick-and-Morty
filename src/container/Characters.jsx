import React, { useState ,useReducer, useMemo , useRef , useCallback} from 'react';
import CharacterCard from '../components/CharacterCard';
import Search from '../components/Search';
import useCharacters from '../hooks/useCharacters'
import '../assets/container/Characters.css';

const initialState = { // useReducer
    favorites:[],
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) => { // useReducer
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            const favPayload = action.payload.id
            const fav = state.favorites.find(favorites => favorites.id === favPayload)
            if (fav) {
                if (fav.id === favPayload) {
                    return {...state}
                }
            }
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case 'REMOVE_TO_FAVORITE':
            const favorites = state.favorites.filter(favorites => favorites.id !== action.payload.id)
            return {
                ...state,
                favorites
            }
            
        default:
            return state;
    }
}

const Characters = () => {
const [favorites, dispatch] = useReducer(favoriteReducer, initialState); // useReducer
const [search, setSearch] = useState('') // actualiza el estado del useMemo
const searchInput = useRef (null); //useRef

const characters = useCharacters(API);


const handleClick = favorite => { // useReducer
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite});
}
const deleteClick = favorite => {
    dispatch({type: 'REMOVE_TO_FAVORITE', payload: favorite})
}

// const handleSearch = (event) => { // useMemo sin useRef
//     setSearch(event.target.value)
// }

// const handleSearch = () => { // useMemo + useRef
//     setSearch(searchInput.current.value);
// }

const handleSearch = useCallback( // useMemo + useRef + useCallback
    () => {
        setSearch(searchInput.current.value)
    },
    [],
)

// const filteredUsers = characters.filter((user) => { //Logica para usar useMemo
//     return user.name.toLowerCase().includes(search.toLowerCase())
// })

const filteredUsers = useMemo (() => //useMemo
characters.filter((user) => { 
    return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search] // Variables de cambio
)


    return (
        <div className="Characters">
            
            <div className="favorites">
                {favorites.favorites.length === 0 ? <span>Sin Favoritos</span> : 
                <div>
                    <h2>Favoritos</h2>
                    <ul>
                        {favorites.favorites.map(favorite => ( // useReducer
                            <li className="favorite-list" key={favorite.id}>
                                {favorite.name}
                                <button onClick={()=>deleteClick(favorite)}>
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>}
            
            </div>

                 {/* useMemo */}
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

            <div className="characters-cont">
                {/* {characters.map(character => ( //sin useMemo*/}
                {filteredUsers.map(character => ( //con UseMemo
                    <CharacterCard key={character.id} character={character} handleClick={handleClick}/>
                ))}
            </div>
        </div>
    )
}

export default Characters
