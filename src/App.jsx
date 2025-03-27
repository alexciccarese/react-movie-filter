import { useEffect, useState } from 'react'

const allMovies = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
]

function App() {
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

        <label className="form-label">Cerca per titolo</label>
        <input
          type="text"
          name="search-movie"
          id="search-movie"
          className="form-control"
          aria-describedby="movie-helper"
          placeholder='Cerca titolo qui'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="form-select mt-3"
          aria-label="genere-helper"
          id='genere-movie'
          value={genere}
          onChange={e => setGenere(e.target.value)}

        >
          <option value="">Seleziona genere (nessuna selezoione)</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <hr />

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3 align-items-center">

            <label className="form-label">Aggiungi un nuovo film</label>
            <div className='d-flex gap-3'>
              <input
                type="text"
                className="form-control"
                name="new-movie"
                id="new-movie"
                aria-describedby="new-movie-helper"
                placeholder="Inserisci il titolo del film"
                value={newMovie}
                onChange={e => setNewMovie(e.target.value)}
              />
              <select
                className="form-select form-select"
                aria-label="new-genere-helper"
                id='new-genere-movie'
                value={addGenere}
                onChange={e => setAddGenere(e.target.value)}
              >
                <option value="">Seleziona genere (nessuna selezoione)</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </div>


        </form >


        <h2 className='mt-5'>I tuoi film:</h2>
        <ul className="list-group mt-2">
          {filteredMovie.map((movie, index) => (
            <li key={`movie-${index}`} className="list-group-item mb-2">
              {movie.title}
            </li>
          ))}
        </ul>

      </div >
    </>
  )
}

export default App
