import React, { Fragment, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import classes from './Login.css'
import PropTypes from 'prop-types'
import { Link,Navigate } from 'react-router-dom'
const Login = ({ setToken,token }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const details =
      {
          username:'user1',
          password:'pass1'

      }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = {
      username,
      password,
    }
    setToken(token)
  }
  if (token.username === details.username && token.password === details.password ) {
      console.log(token)
    // if use connected to the system
    return <Navigate to="/lands" />;
  } else
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
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
  )
}

export default Login
