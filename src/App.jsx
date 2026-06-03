import React from 'react'
import StarBackground from './Components/StarBackground'
import Header from './Components/Header'
import Animate from './Components/Animate'
import CosmicBackground from './Components/StarBackground'

function App() {
    return (
 
    <div className="w-full min-h-screen relative overflow-x-hidden ">
 {/* <StarBackground/> */}
 <CosmicBackground/>
       <Header/>
       <Animate/>

    </div>
  )
}

export default App