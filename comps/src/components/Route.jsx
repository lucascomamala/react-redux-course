import useNavigation from "../hooks/use_navigation"

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation()

  if (currentPath === path)
    return children

  return null
}

export default Route
