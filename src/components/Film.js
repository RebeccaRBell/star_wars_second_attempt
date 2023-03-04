import React from 'react'

const Film = ({film, handleSelectChange}) => {

        const selectFilm = function(){
                handleSelectChange(film);
        }

  return (
    <li id={film.episode_id} onClick={selectFilm}>{film.title}</li>
  )
}

export default Film