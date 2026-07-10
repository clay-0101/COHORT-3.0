import React from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='min-h-screen bg-gray-700 text-white px-[3vw] py-1.5'>
      <Nav setToggle={setToggle} />

      {toggle ?
        <Form />
        :
        <div className='mt-5 flex flex-wrap gap-3'>
          <Card />
        </div>}



    </div>
  )
}

export default App