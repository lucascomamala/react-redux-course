import { GoTrash } from 'react-icons/go'

import { Button, ExpandablePanel } from '../'
import { useRemoveAlbumMutation } from '../../store'

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation()

  const header = <>
    <Button className='mr-2' loading={results.loading} onClick={() => removeAlbum(album)}>
      <GoTrash />
    </Button>
    {album.title}
  </>

  return <ExpandablePanel key={album.id} header={header}>
    list of photos
  </ExpandablePanel>
}

export default AlbumsListItem
