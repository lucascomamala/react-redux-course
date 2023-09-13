const App = () => {
  const handleClick = () => {
    console.log('Add animal')
  }

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
    </div>
  )
}

export default App
