import axios from 'axios'

const searchImages = async (query) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID MVlfUDy4yJ4Pbn8Wm46sX1KxcWBjwRADVWZelRtBEG8'
    },
    params: {
      query
    }
  })
  
  return response.data.results
}

export default searchImages
