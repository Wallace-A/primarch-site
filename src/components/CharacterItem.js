import React from 'react'
import "../App.css";


const CharacterItem = ({ primarch }) => {
  console.log(primarch.image_path);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={`./images/${primarch.image_path}.jpg`} alt="primarch"/>
        </div>
        <div className="card-back">
          <h1>{primarch.name}</h1>
          <ul>
            <li>
              <strong>Homeworld:</strong> {primarch.homeworld}
            </li>
            <li>
              <strong>Loyalty:</strong> {primarch.loyalty}
            </li>
            <li>
              <strong>Legion:</strong> {primarch.legion}
            </li>
            <li>
              <strong>Status:</strong> {primarch.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
