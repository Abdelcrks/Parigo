import { useState } from 'react'
import './App.css'
import { Events } from './components/Events'
import { Background } from './components/Background'
import { ThemeToggle } from './components/ThemeToggle'

function App() {

  return (
    <div className="relative min-h-screen">
      <Background/>      
        <ThemeToggle/>     
  <Events></Events>
    </div>
)
}

export default App
