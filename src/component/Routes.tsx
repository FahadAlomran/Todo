import React from 'react'
import { Routes as Routess, Route } from 'react-router-dom'
import Post from './Post'

function Routes() {



  return (
    <div>
        <nav>
            {/* <Nav/> */}
        </nav>
        <Routess>
<Route  path='/' element={<Post/>}></Route>

</Routess>

    </div>
  )
}

export default Routes