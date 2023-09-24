import { PhotosListItem } from "../"
import { useGetPhotosQuery } from "../../store"

const PhotosList = ({ album }) => {
  const { data: photos, isLoading } = useGetPhotosQuery(album)
  return (
    <div>PhotosList</div>
  )
}

export default PhotosList
