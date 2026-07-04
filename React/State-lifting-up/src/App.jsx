import { useState } from 'react'
import CreateCard from './components/CreateCard'
import Card from './components/Card'

const App = () => {
  const [allData, setAllData] = useState([]) // State Lifting Up 
  function deleteCard(idx){
    setAllData(prev =>{
      prev.splice(idx,1)
      return [...prev]
    })
  }
  return (
    <div className='bg-gray-300 h-screen p-6'>
      <CreateCard setAllData={setAllData} />
      <div className='flex gap-5 flex-wrap'>
        {allData.map((elem, idx) => {
          return <Card key={idx} data={elem} deleteCard={deleteCard} idx={idx}/> // State Lifting Up 
        })}
      </div>
    </div>
  )
}

export default App