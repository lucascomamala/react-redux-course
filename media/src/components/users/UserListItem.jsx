import { GoTrash } from 'react-icons/go'

import { useThunk } from '../../hooks/useThunk'
import { removeUser } from '../../store'

import { Button } from '../'

const UserListItem = ({ user }) => {
  const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser)

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>
          <Button
            className='mr-3'
            loading={isRemovingUser}
            onClick={() => {
              console.log(user)
              doRemoveUser(user)
            }}
          >
            <GoTrash />
          </Button>
          {removingUserError && console.log(removingUserError)}
          {user.name}
        </div>
      </div>
    </div>
  )
}

export default UserListItem
