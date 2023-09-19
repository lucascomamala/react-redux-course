import { useState } from 'react'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

import Link from './components/Link'
import Route from './components/Route'

function App() {


  return (
    <div>
      <Link path="/buttons">Buttons</Link>
      <Link path="/accordions">Accordions</Link>
      <div>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/accordions">
          <AccordionPage />
        </Route>
        <Route path="/dropdowns">
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
}

export default App
