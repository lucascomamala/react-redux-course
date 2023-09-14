import {useState} from 'react'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      <div>{animals}</div>
    </div>
  )
}

export default App
