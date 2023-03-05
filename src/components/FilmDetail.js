import React from 'react'
import Character from './Character'
import Starship from './Starship'

export const FilmDetail = ({film, characters, starships, setSelectCharacter, setSelectStarship}) => {

        const ListOfCharacters = characters.map((character, index) => {
          return <Character character={character} index={index} key={index} />
        })

        const ListOfStarships = starships.map((ship, index) => {
          return <Starship ship={ship} index={index} key={index} /> 
        })

        const characterSelect = function(event){
                event.preventDefault();
                setSelectCharacter(event.target.value)
}

        const starshipSelect = function(event){
                event.preventDefault();
                setSelectStarship(event.target.value)
        }

  return (
    <div className='film-detail'>
    <div className='detail-left'>
        <h1>{film.title}</h1>
        <p>Directed by {film.director}</p>
        <p>{film.opening_crawl}</p>
        </div>
        <div className='detail-right'>
        <select onChange={characterSelect}>
        <option>Character</option>
        {ListOfCharacters}
        </select>
        <select onChange={starshipSelect}>
                <option >
                        Starships
                </option> 
                {ListOfStarships}
        </select>
        </div>
    </div>
  )
}
export default FilmDetail;