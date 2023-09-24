import { PhotosListItem, Button, Skeleton } from "../"
import { useGetPhotosQuery, useAddPhotoMutation } from "../../store"

const PhotosList = ({ album }) => {
  const { data: photos, isFetching, error } = useGetPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  let content
  if (isFetching) {
    content = (
      <Skeleton className='h-8 w-8' times={4} />
    )
  } else if (error) {
    content = <div>{error}</div>
  } else if (photos) {
    content = photos.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ))
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">
          Photos In {album.title}
        </h3>
        <Button
          onClick={() => addPhoto(album)}
          loading={addPhotoResults.isLoading}
          className="text-green-500 hover:text-green-400"
        >
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  )
}

export default PhotosList
