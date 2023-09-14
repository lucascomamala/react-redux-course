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
  return (
    <div>
      <img src={svgMap[type]} alt='animal' />
    </div>
  )
}

export default AnimalShow
