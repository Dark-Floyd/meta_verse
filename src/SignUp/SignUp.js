import React, { Fragment, useCallback, useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { useNavigate  } from 'react-router-dom'
import { userSignUp } from '../api'
import classes from './SignUp.css'
const SignUp = () => {
  const [userName, setUserName] = useState()
  const [userPassword, setUserPassword] = useState()
  const [userRole, setUserRole] = useState()
  const [name, setName] = useState()
  const navigate = useNavigate()
  const signUpUser = useCallback(async () => {
    const res = await userSignUp(userName, userPassword, userRole, name)
    console.log(res)
    navigate("/login")
  }, [])

  return (
    <Fragment>
      <Row>
        <Col>
          <Card style={classes.card}>
            <Card.Body>
              <Card.Title>SignUp</Card.Title>

              <Row style={{ margin: '0.5rem' }}>
                <Col>
                  <input
                    style={classes.input}
                    placeholder="UserName"
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </Col>
              </Row>
              <Row style={{ margin: '0.5rem' }}>
                <Col>
                  <input
                    style={classes.input}
                    placeholder="Password"
                    onChange={(e) => setUserPassword(e.target.value)}
                  ></input>
                </Col>
              </Row>
              <Row style={{ margin: '0.5rem' }}>
                <Col>
                  <input
                    style={classes.input}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </Col>
              </Row>
              <Dropdown onSelect={(eventKey) => setUserRole(eventKey)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                  {userRole || 'Role'}
                </Dropdown.Toggle>

                <Dropdown.Menu >
                  <Dropdown.Item
                    
                    eventKey="BUSINESS"
                  >
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item
                  
                    eventKey="GUEST"
                  >
                    Guest
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            
          </Card>
          <Button onClick={signUpUser}>Sign up</Button>
        </Col>
      </Row>
      
    </Fragment>
  )
}

export default SignUp
