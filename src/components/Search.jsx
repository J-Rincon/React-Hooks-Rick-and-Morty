import React from 'react'

const Search = ({search,searchInput,handleSearch}) => {
    return (
        <div className="Search">
                <label>Buscar </label><input type="text" value={search} ref={searchInput} onChange={handleSearch} placeholder="Buscar"/>
        </div>
    )
}

export default Search
