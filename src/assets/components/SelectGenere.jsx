export default function SelectGenere({ genere, setGenere }) {

  return (

    <>
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
    </>
  )
}