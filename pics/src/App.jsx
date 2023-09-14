import SearchBar from './components/SearchBar'

const App = () => {
  const handleSubmit = (term) => {
    console.log(term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
