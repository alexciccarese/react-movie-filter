import { useEffect, useState } from 'react'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {


  return (
    <>
    <div className="container mt-4">
      <h1>Lista dei Film</h1>

        <ul className="list-group mt-3">

      {movies.map(movie => (
        <li className="list-group-item mb-2">{movie.title}</li>
      ))}

      </ul>
    </div>
    </>
  )
}

export default App
