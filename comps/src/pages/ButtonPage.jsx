import { GoBell, GoTerminal, GoDatabase } from 'react-icons/go'

import Button from '../components/Button'

function ButtonPage() {
  return (
    <div>
      <div>
        <Button className={'mb-5'} success rounded>
          <GoTerminal />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>
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

export default ButtonPage
