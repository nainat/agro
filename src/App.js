import React from 'react'
import './App.css'
import Sidebar from './Components/SidebarSection/sidebar';
import Body from './Components/Body Section/Body'

const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default App;


