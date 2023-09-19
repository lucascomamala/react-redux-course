import { useContext } from 'react'

import NavigationContext from '../context/navigation'

const Link = ({ path, children }) => {
  const { navigate } = useContext(NavigationContext)

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return
    e.preventDefault()
    navigate(path)
  }

  return (
    <a onClick={handleClick} href={path}>
      {children}
    </a>
  )
}

export default Link
