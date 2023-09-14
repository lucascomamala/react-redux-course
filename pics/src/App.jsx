import SearchBar from './components/SearchBar'
import searchImages from './api'

const App = () => {
  const handleSubmit = (term) => {
    searchImages(term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
