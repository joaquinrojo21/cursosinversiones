import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
 
  return (
   <div>
   <NavBar/>
   <ItemListContainer greeting="Bienvenido a jrb inversiones"/>
   </div>
   
  
)
}

export default App
