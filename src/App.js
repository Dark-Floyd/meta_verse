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
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Routes>
        <Route
          path="/login"
          element={
            <Container>
              <Login />
            </Container>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/land/:id" element={<LandInfo />} />
        <Route path="/buyland/:id" element={<BuyLand />} />
        <Route path="/updateland/:id" element={<UpdateLandInfo />} />
      </Routes>
    </div>
  )
}

export default App
