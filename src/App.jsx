//mport{BrowserRouter,Routes,Redirect,Route}from 'react-router-dom'
import Home from'./home.jsx'
import Navbar from './navbar.jsx'
import Carousel from'./Carousel.jsx'
import Link from'./Link.jsx'
import Action from './Action.jsx'
import Anotheraction from './Anotheraction.jsx'
import Pand from './Pand.jsx'
import Somethingelse from './Somethingelse.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="" element={<Navbar/>}/>
   <Route path="/carousel" element={<Carousel/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/Link" element={<Link/>}/>
<Route path="/Action" element={<Action/>}/>
<Route path="/Anotheraction" element={<Anotheraction/>}/>
<Route path="/Pand" element={<Pand/>}/>
<Route path="/Somethingelse" element={<Somethingelse/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App;