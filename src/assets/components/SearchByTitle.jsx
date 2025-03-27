export default function SearchByTitle({ search, setSearch }) {

  return (

    <>
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
      /></>
  )
}