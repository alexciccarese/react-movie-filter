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
  const [genere, setGenere] = useState('')

  useEffect(() => {
    setFilteredMovie(movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) && movie.genere.includes(genere)))

  }, [search, genere])



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
        className="form-select form-select-lg mt-3" 
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
