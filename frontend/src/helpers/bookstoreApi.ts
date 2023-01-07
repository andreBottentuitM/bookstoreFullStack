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
     },

     getSearch: async (valueSearch: string | null) => {

        const json = await apiFetchGet(
            '/search',
              valueSearch as any
        )
        return json
     },

     getLecture: async (lectureType: string | null) => {
    
      const json = await apiFetchGet(
          '/lecture',
          lectureType as any
      )
      return json
   }
}

export default () => bookstoreApi