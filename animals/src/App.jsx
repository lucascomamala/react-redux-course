import {useState} from 'react'

import './App.css'
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />
  })

  return (
    <div className='app'>
      <button onClick={handleClick}>Add animal</button>
      <div>{renderedAnimals}</div>
    </div>
  )
}

export default App
