import { useState } from 'react'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Link from './components/Link'

function App() {


  return (
    <div>
      <Link path="/buttons">Buttons</Link>
      <Link path="/accordions">Accordions</Link>
      <ButtonPage />
      <AccordionPage />
      <DropdownPage />
    </div>
  )
}

export default App
