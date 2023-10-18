
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const coffees=useLoaderData()
  
  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        
      </div>
    </div>
  )
}

export default App
