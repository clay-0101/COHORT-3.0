import axios from "axios"

  export async function getApiData(page, limit) {
        try {
            console.log('api calling...')
            let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${limit * page}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }