import { useState } from 'react'

import Sidebar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

import Route from './components/Route'

function App() {


  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
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
