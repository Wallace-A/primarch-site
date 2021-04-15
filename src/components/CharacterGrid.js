import React from 'react'
import CharacterItem from "./CharacterItem"

const CharacterGrid = ({ primarchs, isLoading}) => {
  return isLoading ? ( 
    <h1>LOADING</h1> 
  ) : ( 
    <section className="cards">
        {primarchs.default.map(primarch => (
            <CharacterItem 
            key={primarch.id}
            primarch={primarch}
            />
        ))}
    </section>
  )
  
}

export default CharacterGrid
