import React from 'react'
import "./App.css"
import Footer from './Components/Footer'
import Hero from './Components/HeroSection'
import Join from './Components/join/join'
import Plans from './Components/Plans'
import Programes from './Components/Programes'
import Reasons from './Components/Reasons'
import Testinomials from './Components/Testnomials'
 const App = () => {
   return (
     <div className='App'>
        
       <Hero/>
       <Programes/>
       <Reasons/>
       <Plans/>
       <Testinomials/>
       <Join/>
       <Footer/>
     </div>
   )
 }
 
 export default App
 
