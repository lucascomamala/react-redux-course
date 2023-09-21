import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchUsers, addUser } from '../store'
import { useThunk } from '../hooks/useThunk'
import Skeleton from './Skeleton'
import Button from './Button'


const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

  const { data } = useSelector((state) => state.users)

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  const handleAddUser = () => {
    doCreateUser()
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
        <Button loading={isCreatingUser} onClick={handleAddUser}>
          + Add User
        </Button>
        {creatingUserError && <div>Error adding user...</div>}
      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList
