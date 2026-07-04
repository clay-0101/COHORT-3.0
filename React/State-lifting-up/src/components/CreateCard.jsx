import React from 'react'
import { useState } from 'react';

const CreateCard = ({setAllData}) => { // State Lifting Up
  const [formData, setFormData] = useState({})
  

  function userDatavalue(e){
    let {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }

  return (
    <div>
        <form 
        onSubmit={(e)=>{
          e.preventDefault()

           setAllData(prev=>{       //Use this for getting instant log or prevent async behaviour of setSate fnx
            let updated = [...prev, formData]
            console.log(updated)
            return updated
           })
           setFormData({
            name : '',
            email :'',     // if you are not using (Two Way Binding) then the form are not clear after submitting..
            url : ''
           })

        }}
        className='bg-white flex flex-col gap-2.5 w-[30vw]  p-5'>
            <input 
            value={formData.name} // two way binding 
            name='name'
            onChange={userDatavalue}
            className="border border-black rounded  px-[20px] py-[8px]" 
            type="text" placeholder='Name' required/>

            <input
            value={formData.email} // two way binding 
            name='email'
            onChange={userDatavalue} 
            className="border border-black rounded  px-[20px] py-[8px]" 
            type="mail" placeholder='Email' required/>

            <input
            value={formData.url} // two way binding 
            name='url'
            onChange={userDatavalue}
             className="border border-black rounded  px-[20px] py-[8px]" 
             type="url" placeholder='Url' required/>

            <button className='bg-blue-500 text-white active:scale-98 px-[20px] py-[8px] rounded'>Add Card</button>
        </form>
        {/* <p>name - {formData.name}</p>
        <p>mail - {formData.email}</p>
        <p>url - {formData.url}</p> */}
    </div>
  )
}

export default CreateCard