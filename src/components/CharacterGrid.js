import React from 'react'

const CharacterGrid = ({ primarchs, isLoading}) => {
  return isLoading ? ( 
    <h1>LOADING</h1> 
  ) : ( 
    <section className="cards">
        {primarchs.default.map(primarch => (
            <h1>{primarch.name}</h1>
        ))}
    </section>
  )
  
}

export default CharacterGrid
