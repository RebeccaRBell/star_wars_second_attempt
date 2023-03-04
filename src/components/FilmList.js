import React from 'react'
import Film from './Film'

const FilmList = ({films, handleSelectChange}) => {

        const ListOfFilms = films.map((film, index) => {
          return <Film film={film} index={index} key={index} handleSelectChange={handleSelectChange}/>
        })
        const orderedFilms = [];
        const orderFilms1 = ListOfFilms.slice(3,6);
        const orderFilms2 = ListOfFilms.slice(0,3);
        orderedFilms.push(orderFilms1, orderFilms2);
  return (
        <div className='film-list'>
    <ul>{orderedFilms}</ul>
    </div>
  )
}

export default FilmList