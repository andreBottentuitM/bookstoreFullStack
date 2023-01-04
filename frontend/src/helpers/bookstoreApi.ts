import qs from 'qs'

const BASEAPI = 'http://localhost:5001'
const apiFetchGet = async (endPoint:string, body = []) => {
    
    const res = await fetch(`${BASEAPI+endPoint}?${qs.stringify(body)}`)

   const json = await res.json()
 
   return json

    }

const bookstoreApi = {
    
    getBooks: async () => {
      
      const json = await apiFetchGet(
         '/books'
      )
      return json.books
     }
}

export default () => bookstoreApi