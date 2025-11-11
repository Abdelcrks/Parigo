import { useState } from 'react'
import './App.css'
import { Events } from './components/Events'
import { Background } from './components/Background'
import { Switch } from './components/Switch'

function App() {

  return (
    <div className="relative min-h-screen">
      <Background/>      
        <Switch/>     
  <Events></Events>
    </div>
)
}

export default App
