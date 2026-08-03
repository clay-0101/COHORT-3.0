import axios from "axios";

export const axioxInstance = axios.create({
    baseURL : `https://itunes.apple.com/search?entity=song&limit=10&term=`
})