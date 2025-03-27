export default function MovieList({filteredMovie, setFilteredMovie}) {

  return (

    <>
      <h2 className='mt-5'>I tuoi film:</h2>
      <ul className="list-group mt-2">
        {filteredMovie.map((movie, index) => (
          <li key={`movie-${index}`} className="list-group-item mb-2">
            {movie.title}
          </li>
        ))}
      </ul>
    </>
  )
}