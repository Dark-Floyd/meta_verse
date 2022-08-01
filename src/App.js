import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router'
import './App.css'
import CustomNavbar from './components/CustomNavbar'
import Login from './components/Login/Login'
import SignUp from './SignUp/SignUp'
import Lands from './components/Lands/Lands'
import LandInfo from './components/LandInfo/LandInfo'
import BuyLand from './components/BuyLand/BuyLand'
import UpdateLandInfo from './components/UpdateLandInfo/UpdateLandInfo'
import About from './components/About/About'
import { useState } from 'react'
import UserContext from './UserContext'
import Dashboard from './components/Dashboard/Dashboard'
function App() {
  const currentUser = useState({})
  const [userCreds, setUserCreds] = useState({ userId: null, token: null })
  const [connected, setConnected] = useState(false)
  return (
    <div>
      {!connected ? (
        <div>
          <CustomNavbar />
          <Routes>
            <Route
              path="/login"
              element={<Login setUserCreds={setUserCreds} userCreds={userCreds} setConnected={setConnected} connected={connected}/>}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      ) : (
        <UserContext.Provider value={currentUser}>
          <div className="App">
            <CustomNavbar />
            <Routes>
            <Route
              path="/login"
              element={<Login setUserCreds={setUserCreds} userCreds={userCreds} setConnected={setConnected} connected={connected} />}
            />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/lands" element={<Lands />} />
              <Route path="/lands/:id" element={<LandInfo token={userCreds.token}/>} />
              <Route path="/buyland/:id" element={<BuyLand />} />
              <Route path="/updateland/:id" element={<UpdateLandInfo />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </UserContext.Provider>
      )}
    </div>
  )
}

export default App
