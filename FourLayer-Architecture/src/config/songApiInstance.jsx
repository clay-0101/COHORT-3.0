import axios from "axios";

export const axioxInstance = axios.create({
    baseURL : `https://itunes.apple.com/`
})