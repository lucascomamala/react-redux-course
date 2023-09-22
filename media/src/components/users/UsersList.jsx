import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchUsers, addUser } from '../../store'
import { useThunk } from '../../hooks/useThunk'

import { Skeleton, Button } from '../'
import { UserListItem } from '../'


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

  let content

  if (isLoadingUsers) {
    content = <Skeleton times={6} className='h-10 w-full' />

  } else if (loadingUsersError) {
    console.log(loadingUsersError)
    content = <div>Error fetching data...</div>
  } else {
    content = data.map((user) => (
      <UserListItem key={user.id} user={user} />
    ))
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3 items-center'>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button loading={isCreatingUser} onClick={handleAddUser}>
          + Add User
        </Button>
        {creatingUserError && <div>Error adding user...</div>}
      </div>
      {content}
    </div>
  )
}

export default UsersList
