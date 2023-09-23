import { useGetAlbumsQuery } from "../../store"
const AlbumsList = ({user}) => {
  const { data: albums, error, isLoading } = useGetAlbumsQuery(user)

  console.log(albums,error,isLoading)

  return (
    <div>AlbumsList {user.name}</div>
  )
}

export default AlbumsList
