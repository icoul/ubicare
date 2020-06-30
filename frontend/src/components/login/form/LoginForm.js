import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { SHA256 } from 'utils/SHA256';
import logo from 'static/images/logo/ubi_ci.png';

import './LoginForm.css';

const LoginForm = ({ handleLogin, isLoggedIn }) => {
  const [ userId, setUserId ] = useState('');
  const [ encodePw, setEncodePw ] = useState('');
  const [ test, setTest ] = useState(false);

  const handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      handleLogin(userId, encodePw);
    }
  }

  return (
    <>
      <div className="loginFormHeader">
          {/* <img src={logo} alt="logo" /> */}
          <p className="logo">UBiCARE</p>
          {/* <p className="logoDetail">UBiquitous Total Operation Monitoring and managing System</p> */}
        </div>
      <form>
        <div className="loginForm">
          <Form.Group as={Row} controlId="formBasicEmail">
            <Col>
              <input type="text" 
                            placeholder="Enter ID"
                            name="userId"
                            onChange={({ target: { value } }) => setUserId(value)}
                            onKeyPress={handleKeyPress} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicuserPw">
            <Col>
              <input type="password" 
                            placeholder="Password"
                            name="userPw"
                            onChange={({ target: { value } }) => setEncodePw(SHA256(value))}
                            onKeyPress={handleKeyPress} />
            </Col>
          </Form.Group>
          <div className="autoLoginBox">
            <input type="checkbox" 
                   id="autoLoginCheck"
                   checked={isLoggedIn}
                   onChange={() => setTest(!test)} /> 
            <label htmlFor="autoLoginCheck">자동로그인</label>
          </div>
          <Button variant="primary" type="button" onClick={() => {handleLogin(userId, encodePw, test)}} block>
            Log in
          </Button>
        </div>
      </form>
    </>
  );  
}

export default LoginForm;