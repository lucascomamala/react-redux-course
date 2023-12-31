import { useGetAlbumsQuery, useAddAlbumMutation } from "../../store"
import { Skeleton, Button, AlbumsListItem } from '../'

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useGetAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  let content

  if (isFetching) {
    content = <Skeleton className='h-10 w-full' times={3} />
  } else if (error) {
    content = <div>{error}</div>
  } else if (data) {
    content = data.map(album =>
      <AlbumsListItem key={album.id} album={album} />
    )
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          onClick={() => addAlbum(user)}
          className="text-green-500 hover:text-green-400"
        >
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
