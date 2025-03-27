import { useEffect, useState } from 'react'

const movies = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
]


function App() {
  const [filteredMovie, setFilteredMovie] = useState(movies)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilteredMovie(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())))
  }, [search])

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



        <ul className="list-group mt-5">
          {filteredMovie.map((movie, index) => (
            <li key={`movie-${index}`} className="list-group-item mb-2">
              {movie.title}
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App
