import { useState } from 'react'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import Dropdown from './components/Dropdown'

function App() {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option)
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ]

  return (
    <div>
      <ButtonPage />
      <AccordionPage />
      <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
  )
}

export default App
