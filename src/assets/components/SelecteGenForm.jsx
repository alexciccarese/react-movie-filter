export default function SelectGenForm({ addGenere, setAddGenere }) {

  return (

    <>
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
    </>
  )
}