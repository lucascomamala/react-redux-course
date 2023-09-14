import axios from 'axios'

const serachImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID MVlfUDy4yJ4Pbn8Wm46sX1KxcWBjwRADVWZelRtBEG8'
    },
    params: {
      query: 'cat'
    }
  })

  console.log(response)
  return response
}

export default serachImages
