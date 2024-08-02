import React from 'react'
import './App.css';
import './index.css'
import InvitationCard from './components/Invitation';
import Sound from './components/Sound';
const App = () => {
  return (
    <div>
      <Sound/>
      <InvitationCard/>
    </div>
  )
}

export default App