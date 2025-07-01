import { useState } from 'react'
import Home from './pages/home'
import { Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import ProtectedRoutes from './components/protected_routes'
import Navbar from './components/navbar'
import PublicRoute from './components/publicroutes.jsx'
import Profile from './pages/profile'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path='/signup' element={<PublicRoute><SignUpPage/></PublicRoute>}/> 
        <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/> 
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
