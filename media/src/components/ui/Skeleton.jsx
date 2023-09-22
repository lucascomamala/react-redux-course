import classNames from 'classnames'

const Skeleton = ({ times, className }) => {
  const outerClasses = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-300',
    'rounded',
    'mb-2.5',
    className,
  )

  const innerClasses = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-300',
    'via-gray-100',
    'to-gray-300',
  )

  const boxes = Array(times).fill(0).map((_, i) =>
    <div key={i} className={outerClasses}>
      <div className={innerClasses} />
    </div>
  )

  return boxes
}

export default Skeleton
