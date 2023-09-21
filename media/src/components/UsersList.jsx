import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../store'
import Skeleton from './Skeleton'

const UsersList = () => {
  const dispatch = useDispatch()

  const { isLoading, data, error } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) {
    return (
      <Skeleton times={6} />
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
