import { GoTrash } from 'react-icons/go'

import { useThunk } from '../../hooks/useThunk'
import { removeUser } from '../../store'

import { Button, ExpandablePanel, AlbumsList } from '../'

const UserListItem = ({ user }) => {
  const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser)

  const header = <>
    <Button
      className='mr-3'
      loading={isRemovingUser}
      onClick={() => {
        doRemoveUser(user)
      }}
    >
      <GoTrash />
    </Button>
    {removingUserError && console.log(removingUserError)}
    {user.name}
  </>

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>

  )
}

export default UserListItem
