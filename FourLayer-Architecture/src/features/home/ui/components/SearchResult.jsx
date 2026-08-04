import React from 'react'
import SearchResultItem from './SearchResultItem'
import { useSelector } from 'react-redux'

const SearchResult = () => {
   let {songsData} = useSelector((state)=>state.track)
  return (
    <div className={`bg-black ${songsData.length === 0 ? 'hidden' : 'h-[40vw]'} rounded-2xl p-4 flex flex-col gap-5 overflow-y-auto`}>

    {songsData?.map((track,idx)=>{
        return <SearchResultItem key={idx} track={track}/>
    })}
    </div>
  )
}

export default SearchResult