

import Sidebar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import CounterPage from './pages/CounterPage'

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
        <Route path="/modals">
          <ModalPage />
        </Route>
        <Route path="/tables">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  )
}

export default App
