import React from 'react'
import SearchResultItem from './SearchResultItem'
import { useSelector } from 'react-redux'

const SearchResult = () => {
   let {songsData} = useSelector((state)=>state.track)
  return (
    <div className=' bg-black rounded-2xl p-4 '>

    {songsData?.map((track,idx)=>{
        return <SearchResultItem key={idx} track={track}/>
    })}
    </div>
  )
}

export default SearchResult