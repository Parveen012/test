import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Dashboard = ({name,count,setCount}) => {
  return (
    <div>
        <Navbar />

      <h1>Dashboard</h1>
      <p>{name}</p>
     <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>click me</button>



<Footer />
    </div>
  )
}

export default Dashboard
