import { GoTrash } from 'react-icons/go'

import { Button, ExpandablePanel } from '../'

const AlbumsListItem = ({ album }) => {
  const header = <div>
    <Button>
      <GoTrash />
    </Button>
    {album.title}
  </div>

  return <ExpandablePanel key={album.id} header={header}>
    list of photos
  </ExpandablePanel>
}

export default AlbumsListItem
