import { GoTrash } from 'react-icons/go'

import { useThunk } from '../../hooks/useThunk'
import { removeUser } from '../../store'

import { Button } from '../'

const UserListItem = ({ user }) => {
  const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser)

  return (
    <div className='mb-2 border rounded'>
      <div className='p-2 justify-between items-center cursor-pointer'>
        <Button loading={isRemovingUser} onClick={() => doRemoveUser(user)}>
          <GoTrash />
        </Button>
        {removingUserError && console.log(user)}
        {user.name}
      </div>
    </div>
  )
}

export default UserListItem
