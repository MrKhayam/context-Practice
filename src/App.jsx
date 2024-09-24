import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Input from './components/Input'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div className="w-full h-screen border-t border-black bg-zinc-900">
        <Input />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
