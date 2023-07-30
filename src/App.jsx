import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/modal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Modal />
   <Navbar />
    <h1>Hello World!</h1>
    </>
  )
}

export default App
