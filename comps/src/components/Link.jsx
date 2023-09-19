import classNames from 'classnames'

import useNavigation from '../hooks/use_navigation'

const Link = ({ path, children }) => {
  const { navigate } = useNavigation()

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
