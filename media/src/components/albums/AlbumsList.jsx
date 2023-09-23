import { useGetAlbumsQuery, useAddAlbumMutation } from "../../store"

import { Skeleton, ExpandablePanel, Button } from '../'
const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useGetAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  let content

  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>{error}</div>
  } else if (data) {
    content = data.map(album => {
      const header = album.title
      return <ExpandablePanel key={album.id} header={header}>
        list of photos
      </ExpandablePanel>
    })
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={() => addAlbum(user)}>
          + Add Album
        </Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList
