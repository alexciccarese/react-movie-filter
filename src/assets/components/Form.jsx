import SelectGenForm from './SelecteGenForm'
import SelectTitleForm from './SelectTitleForm'

export default function Form({ handleFormSubmit, newMovie, setNewMovie, addGenere, setAddGenere }) {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 align-items-center">
          <SelectTitleForm newMovie={newMovie} setNewMovie={setNewMovie} />
          <SelectGenForm addGenere={addGenere} setAddGenere={setAddGenere} />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  )
}