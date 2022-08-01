import React, { Fragment, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import classes from './Login.css'
import PropTypes from 'prop-types'
import { Link, Navigate } from 'react-router-dom'

let tokenFromLogin
let userIdFromLogin
const Login = ({ setUserCreds, userCreds, connected, setConnected }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  async function loginUser(credentials) {
    return fetch('https://metaverse-api.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await loginUser({
      username,
      password,
    })
    setUserCreds(data)
    setConnected(true)
    console.log(data)
  }
  if (connected) {
    console.log(userCreds)
    // if use connected to the system
    return <Navigate to="/lands" />
  } else
    return (
      <div className="login-wrapper" style={{alignContent:'center'}}>
        
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <Row>
              <p>Username</p>
            </Row>
            <Row>
              <label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
              <label>
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </Row>

            <div>
              <button type="submit">Submit</button>
            </div>

            <Link to={`/signup`}>
              <div>
                <button type="submit">Sign Up</button>
              </div>
            </Link>
          </form>
     
      </div>
//     <Container className="login-wrapper"><form onSubmit={handleSubmit}>

//     <h3>Log in</h3>

//     <div className="form-group">
//         <label>Email</label>
//         <input type="text" className="form-control" placeholder="Enter email"   onChange={(e) => setUserName(e.target.value)}/>
//     </div>

//     <div className="form-group">
//         <label>Password</label>
//         <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
//     </div>

   

//     <button type="submit" className="btn btn-dark btn-lg btn-block" style={{margin:'2rem',alignContent:'center'}}>Sign in</button>
   
// </form></Container>
      
    )
}

export default Login
