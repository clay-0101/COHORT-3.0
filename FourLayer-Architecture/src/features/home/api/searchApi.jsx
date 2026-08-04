import React from 'react'
import axios from 'axios'
import { axioxInstance } from '../../../config/songApiInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'

const searchApi = () => {
    let searchResults = async (song) => {
        let res = await axioxInstance.get(`search?entity=song&limit=10&term=${encodeURIComponent(song)}`)
        let Allsongs = res.data.results.map((track) => {
            return {
                id: track.trackId,
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

export const playTrackAction = createAsyncThunk(
    'song/play',
    async (id, thunkApi) => {
        try {
            let res = await axioxInstance.get(`lookup?id=${id}`)
            let playSong = res.data.results.map((track) => {
                return {
                    id: track.trackId,
                    songName: track.trackName,
                    artistName: track.artistName,
                    preview: track.previewUrl,
                    image: track.artworkUrl100
                        ? track.artworkUrl100.replace("100x100bb", "600x600bb")
                        : null,
                }
            })
            return playSong[0]
        } catch (error) {
            return thunkApi.rejectWithValue('Not Found')
        }
    })
playTrackAction()