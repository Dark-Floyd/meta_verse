import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import classes from './Login.css'
const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card style={classes.card}>
            <Card.Body>
              <Card.Title>Login</Card.Title>

              <Row style={{margin:'0.5rem'}}>
                <Col>
                  <input style={classes.input} placeholder="UserName"></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input style={classes.input} placeholder="Password"></input>
                </Col>
              </Row>
              <Card.Link href="#about">About</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Login
