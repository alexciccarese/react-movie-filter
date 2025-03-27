export default function SelectTitleForm({ newMovie, setNewMovie }) {

  return (
    <>
      <label className="form-label">Aggiungi un nuovo film</label>
      <div className="d-flex gap-3">
        <input
          type="text"
          className="form-control mb-3"
          name="new-movie"
          id="new-movie"
          aria-describedby="new-movie-helper"
          placeholder="Inserisci il titolo del film"
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
        />
      </div>
    </>
  )
}