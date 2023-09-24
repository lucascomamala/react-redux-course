import { PhotosListItem, Button } from "../"
import { useGetPhotosQuery, useAddPhotoMutation } from "../../store"

const PhotosList = ({ album }) => {
  const { data: photos, isLoading } = useGetPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">
          Photos In {album.title}
        </h3>
        <Button
          onClick={() => addPhoto(album)}
          loading={addPhotoResults.isLoading}
        >
          + Add Photo
        </Button>
      </div>
    </div>
  )
}

export default PhotosList
