import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../store'

const UsersList = () => {
  const dispatch = useDispatch()

  const { isLoading, data, error } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    console.log(error)
    return <div>Error fetching data...</div>
  }

  return (
    <div>{data.length}</div>
  )
}

export default UsersList
