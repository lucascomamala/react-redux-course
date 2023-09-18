import { GoBell, GoTerminal, GoDatabase } from 'react-icons/go'

import Button from './components/Button'

function App() {
  const handleClick = () => {
    alert('You clicked me!')
  }

  return (
    <div>
      <div>
        <Button success rounded onClick={handleClick}>
          <GoTerminal />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger onClick={()=>console.log('hello')}>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseEnter={()=>{console.log("enter")}}>
          <GoBell />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseLeave={() => { console.log("leave") }}>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  )
}

export default App
