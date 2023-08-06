import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import MenuModal from './components/modals/MenuModal'
import useMenuModal from './hooks/useMenuModal'



function App() {
  const [count, setCount] = useState(0)
  const menuModal = useMenuModal();
  return (
    <>
    <MenuModal isOpen={menuModal.isOpen} onClose={menuModal.onClose}/>
   <Navbar />
    </>
  )
}

export default App
