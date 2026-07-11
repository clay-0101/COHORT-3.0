import React from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [formData, setFormData] = useState([])
  const [toggle, setToggle] = useState(false)
  console.log(formData)

  return (
    <div className='min-h-screen bg-gray-700 text-white px-[3vw] py-1.5'>
      <Nav setToggle={setToggle} />

      {toggle ?
        <Form setFormData={setFormData} setToggle={setToggle}/>
        :
        <div className='mt-5 flex flex-wrap gap-3'>
         {formData.map((val)=>{
          return <Card val={val} />
         })}
        </div>}



    </div>
  )
}

export default App