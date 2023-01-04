import {Route, Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Toys from './Toys'
import Toy from './Toy'

function App() {

  return (
   <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Toys/>}/>
      <Route path="toys/:toyId" element={<Toy/>}/>
    </Routes>
   </>
  )
}

export default App
