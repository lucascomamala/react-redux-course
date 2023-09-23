import { useGetAlbumsQuery } from "../../store"

import { Skeleton, ExpandablePanel, Button } from '../'
const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useGetAlbumsQuery(user)

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
      <div>AlbumsList {user.name}</div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList
