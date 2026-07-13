import React from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [formData, setFormData] = useState(()=>{
    return JSON.parse(localStorage.getItem('users')) || []
  })
  const [toggle, setToggle] = useState(false)
  const [updatedFormData, setUpdateFormData] = useState(null)

 
  
  function removeCard(id){
    let filteredData = formData.filter((val)=>{
      return val.id !== id
    })
    setFormData(filteredData)
    localStorage.setItem('users',JSON.stringify(filteredData))
  }

  return (
    <div className='min-h-screen bg-gray-700 text-white px-[3vw] py-1.5'>
      <Nav setToggle={setToggle} />

      {toggle ?
        <Form 
        formData={formData}
        setFormData={setFormData} 
        setToggle={setToggle}
        updatedFormData={updatedFormData}
        setUpdateFormData={setUpdateFormData}/>
        :
        <div className='mt-5 flex flex-wrap gap-3'>
         {formData.map((val)=>{
          return <Card 
          key={val.id} 
          val={val} 
          removeCard={removeCard} 
          setToggle={setToggle}
          setUpdateFormData={setUpdateFormData}
          />
         })}
        </div>}



    </div>
  )
}

export default App