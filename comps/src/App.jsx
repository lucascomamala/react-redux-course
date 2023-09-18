import { GoBell, GoTerminal, GoDatabase } from 'react-icons/go'

import Button from './components/Button'

function App() {
  return (
    <div>
      <div>
        <Button success rounded>
          <GoTerminal />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
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
