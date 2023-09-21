import classNames from 'classnames'

const Skeleton = ({times}) => {
  const boxes = Array(times).fill(0).map((_, i) => 
    <div key={i} />
  ) 
  return (
    <div>Skeleton</div>
  )
}

export default Skeleton
