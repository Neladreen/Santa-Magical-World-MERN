import {Route, Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Toys from './Toys'
import Toy from './Toy'
import AddToy from './AddToy'

export default function App() {

  return (
   <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Toys/>}/>
      <Route path="toys/:toyId" element={<Toy/>}/>
      <Route path="toy/add" element={<AddToy/>}/>
    </Routes>
   </>
  )
}