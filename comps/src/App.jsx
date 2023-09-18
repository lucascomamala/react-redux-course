import ButtonPage from './pages/ButtonPage'
import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      label: 'Can i Kick it?',
      content: 'Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!'
    },
    {
      label: 'Who let the dogs out?',
      content: 'Who? Who? Who? Who?'
    },
    {
      label: 'What is love?',
      content: 'Baby dont hurt me, dont hurt me, no more'
    }
  ]
  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  )
}

export default App
