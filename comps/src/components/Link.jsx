import { useContext } from 'react'
import classNames from 'classnames'

import NavigationContext from '../context/navigation'

const Link = ({ path, children }) => {
  const { navigate } = useContext(NavigationContext)

  const classes = classNames(
    'text-blue-500',
    'underline',
    'font-bold',
  )

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className={classes} onClick={handleClick} href={path}>
      {children}
    </a>
  )
}

export default Link
