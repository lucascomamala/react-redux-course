import { GoTrash } from "react-icons/go"

import { useRemovePhotoMutation } from "../../store"

const PhotosListItem = ({ photo }) => {
  const [removePhoto, removePhotoResults] = useRemovePhotoMutation()

  return (
    <div className="relative m-2 cursor-pointer" onClick={() => removePhoto(photo)}>
      <img className="h-40 w-40" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-5xl text-red-500" />
      </div>
    </div>
  )
}

export default PhotosListItem
