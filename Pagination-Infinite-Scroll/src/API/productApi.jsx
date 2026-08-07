import axios from "axios"

  export async function getApiData(pageParam, limit) {
        try {
           console.log('run')
            let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }