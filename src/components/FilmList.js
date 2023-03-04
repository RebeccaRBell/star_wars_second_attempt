import React from 'react'
import Film from './Film'

const FilmList = ({films, handleSelectChange}) => {

        const ListOfFilms = films.map((film, index) => {
          return <Film film={film} index={index} key={index} handleSelectChange={handleSelectChange}/>
        })

  return (
        <div className='film-list'>
    <ul>{ListOfFilms}</ul>
    </div>
  )
}

export default FilmList