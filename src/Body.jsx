import { useEffect, useState } from 'react'
import allMovies from './assets/data/allMovies'
import SearchByTitle from './assets/components/SearchByTitle'
import SelectGenere from './assets/components/SelectGenere'
import Form from './assets/components/Form'
import MovieList from './assets/components/MovieList'

function Main() {
  const [filteredMovie, setFilteredMovie] = useState(allMovies)
  const [movies, setMovies] = useState(allMovies)
  const [search, setSearch] = useState('')
  const [genere, setGenere] = useState('')
  const [newMovie, setNewMovie] = useState('')
  const [addGenere, setAddGenere] = useState('')

  useEffect(() => {
    setFilteredMovie(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) && movie.genere.includes(genere)))

  }, [movies, search, genere])


  function handleFormSubmit(e) {
    e.preventDefault(e)

    const newMovieObj = {
      title: newMovie,
      genere: addGenere
    }

    setMovies([newMovieObj, ...movies])
    setNewMovie('')
    setAddGenere('')
  }


  return (
    <>
      <div className="container mt-4">
        <h1>Lista dei Film</h1>

        <SearchByTitle 
        search={search} 
        setSearch={setSearch} 
        />

        <SelectGenere 
        genere={genere} 
        setGenere={setGenere} 
        />

        <hr />

        <Form
          handleFormSubmit={handleFormSubmit}
          newMovie={newMovie}
          setNewMovie={setNewMovie}
          addGenere={addGenere}
          setAddGenere={setAddGenere}
        />


        <MovieList 
        filteredMovie={filteredMovie}
        setFilteredMovie={setFilteredMovie}
        />

      </div >
    </>
  )
}

export default Main
