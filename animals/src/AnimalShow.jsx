import { useState } from 'react'

import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import cow from './svg/cow.svg'
import heart from './svg/heart.svg'

const svgMap = {
  bird,
  cat,
  dog,
  gator,
  horse,
  cow,
}

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt='animal' />
      <img
        src={heart}
        alt='heart'
        style={{ width: 10 + 10 * clicks }}
      />
    </div>
  )
}

export default AnimalShow
