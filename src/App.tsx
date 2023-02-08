import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './component/Post'
import Routes from './component/Routes'
import Nav from './component/Nav'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Nav/>
      <Routes/>
      <Footer/>
    </div>
  )
}

export default App
