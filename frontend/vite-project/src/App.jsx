import { useState } from 'react'
import Home from './pages/home'
import { Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import ProtectedRoutes from './components/protected_routes'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/> 
        <Route path='/'
            element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            }
        />
      </Routes>
    </>
  )
}

export default App
