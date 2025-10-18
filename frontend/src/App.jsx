import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import toast from 'react-hot-toast'


const App = () => {
  return (
    <div>
      <h2 className='text-xl'>try again</h2>
      <button onClick={() => toast.error("congrats")} className='bg-red-500'>Click me</button>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App