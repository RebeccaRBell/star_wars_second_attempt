import React, {useState, useEffect} from 'react'
import FilmList from '../components/FilmList';
import FilmDetail from '../components/FilmDetail';
import CharacterDetail from '../components/CharacterDetail';
import StarshipDetail from '../components/StarshipDetail';



const FilmContainer = () => {

        const [films, setFilms] = useState([]);
        const [selectedFilm, setSelectedFilm] = useState(null);
        const [characters, setCharacters] = useState([]);
        const [starships, setStarships] = useState([]);
        const [chosenCharacter, setChosenCharacter] = useState(null);
        const [chosenStarship, setChosenStarship] = useState(null);

  useEffect( () => {
    fetch('https://swapi.dev/api/films')
    .then(res => res.json())
    .then(film => setFilms(film.results));
  }, [films])

   const ListStarships = (array) => {
    const listShips = array.map((ship) => {
      return fetch(ship).then(result => result.json())
    })
    Promise.all(listShips)
    .then((data) => {
      setStarships(data);
    })
  }

  const handleSelectChange = (film) => {
    const charPromises = film.characters.map((character) => {
      return fetch(character)
      .then(result => result.json())
    })
    Promise.all(charPromises)
    .then((data) => {
      setCharacters(data);
      setSelectedFilm(film);
      ListStarships(film.starships);
    })
  }

  const setSelectCharacter = function(character){
    fetch(character).then(res => res.json())
    .then(character => setChosenCharacter(character))
    console.log(chosenCharacter)
  }
  const setSelectStarship = function(starship){
    fetch(starship).then(res => res.json())
    .then(ship => setChosenStarship(ship))
 }

  return (
    <div className='container'>
      <FilmList films={films} handleSelectChange={handleSelectChange}/>
      { selectedFilm ? <FilmDetail film={selectedFilm} characters={characters} starships={starships} setSelectCharacter={setSelectCharacter} setSelectStarship={setSelectStarship}/>: null}
     <div className='character-starship'>
     { chosenCharacter  ? <CharacterDetail character={chosenCharacter} />: null}
      { chosenStarship ? <StarshipDetail starship={chosenStarship} />: null}
      </div>
    </div>
  )
}

export default FilmContainer