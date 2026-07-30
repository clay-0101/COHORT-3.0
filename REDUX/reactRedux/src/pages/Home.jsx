import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  let {user} =useSelector((store)=> store.auth)
  return (
    <div>
      <p>{user.email}</p>
      <p>{user.password}</p>
    </div>
  )
}

export default Home