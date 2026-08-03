import React from 'react'
import axios from 'axios'
import { axioxInstance } from '../../../config/songApiInstance'

const searchApi = () => {
    let searchResults = async (song) => {
        let res = await axioxInstance.get(`${encodeURIComponent(song)}`)
        let Allsongs = res.data.results.map((track) => {
            return {
                id: track.artistId,
                songName: track.trackName,
                artistName: track.artistName,
                preview: track.previewUrl,
                image: track.artworkUrl100
                    ? track.artworkUrl100.replace("100x100bb", "600x600bb")
                    : null,
            }
        })
        return Allsongs
    }
    return searchResults
}

export default searchApi