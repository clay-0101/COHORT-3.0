import { useEffect, useState } from "react"
import searchApi from "../api/searchApi"
import { useQueries, useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { setSongsData } from "../state/searchSlice"




const useHome = () => {
    let dispatch = useDispatch()
    let getTracksData = searchApi()
    const [trackName, setTrackName] = useState('')
    const [debounceParams, setDebounceParams] = useState('')



    // Debouncing
    useEffect(() => {
        let searchDelay = setTimeout(() => {
            if (trackName.trim() === '') {
                dispatch(setSongsData([]))
                return
            }
            setDebounceParams(trackName)
        }, 500)
        return () => {
            clearTimeout(searchDelay)
        }
    }, [trackName])


    // Call api using tanStack Query
    let { data, isPending, error } = useQuery({
        queryKey: ['Tracks', debounceParams],
        queryFn: () => getTracksData(debounceParams),

    })
    // For Accurate Search Results , Prevent Lagging
    useEffect(() => {
        if (data) {
            dispatch(setSongsData(data))
        }
    }, [data, dispatch])

    return {
        data,
        isPending,
        error,
        setTrackName,

    }

}
export default useHome