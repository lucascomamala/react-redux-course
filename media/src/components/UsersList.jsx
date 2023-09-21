import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers, addUser } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'

const UsersList = () => {
  const dispatch = useDispatch()

  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const [loadingUsersError, setLoadingUsersError] = useState(null)
  const [isCreatingUser, setIsCreatingUser] = useState(false)
  const [creatingUserError, setCreatingUserError] = useState(null)

  const { data } = useSelector((state) => state.users)

  useEffect(() => {
    setIsLoadingUsers(true)
    dispatch(fetchUsers())
      .unwrap()
      .catch((error) => setLoadingUsersError(error))
      .finally(() => setIsLoadingUsers(false))
  }, [dispatch])

  const handleAddUser = () => {
    setIsCreatingUser(true)
    dispatch(addUser())
      .unwrap()
      .catch((error) => setCreatingUserError(error))
      .finally(() => setIsCreatingUser(false))
  }

  if (isLoadingUsers) {
    return (
      <Skeleton times={6} className='h-10 w-full' />
    )
  }

  if (loadingUsersError) {
    console.log(loadingUsersError)
    return <div>Error fetching data...</div>
  }

  const renderedUsers = data.map((user) => (
    <div key={user.id} className='mb-2 border rounded'>
      <div className='p-2 justify-between items-center cursor-pointer'>
        {user.name}
      </div>
    </div>
  ))

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        {
          isCreatingUser ? 'Adding user...' :
            <Button onClick={handleAddUser}>
              + Add User
            </Button>
        }
        {creatingUserError && <div>Error adding user...</div>}
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList
