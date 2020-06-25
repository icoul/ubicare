import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from 'redux/action/login';
import SignIn from './SignIn';
import Form from './form/LoginForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(store => store.loginManager.login.status);
  const authStatus = useSelector(store => store.loginManager.status);
  
  const handleLogin = useCallback((userId, encodePw, test) => {
    return dispatch(authenticate(userId, encodePw, test));
  }, [loginStatus]);

  useEffect(() => { // 자동로그인
    if (authStatus.isLoggedIn === true && authStatus.currentUser !== '') {
      let loginData = {
        isLoggedIn: true,
        username: authStatus.currentUser
      };

      document.cookie = 'key=' + window.btoa(JSON.stringify(loginData));
      props.history.push("/");
    }
  }, [])

  useEffect(() => { // 로그인 상태변화
    if (loginStatus === 'SUCCESS') {
      props.history.push("/");
    }
    else if (loginStatus === 'FAIL') {
      alert("로그인에 실패했습니다.\n아이디 혹은 비밀번호를 확인해주세요.");
    }
  }, [loginStatus])

  return (
    <SignIn form={
      <Form
        handleLogin={handleLogin}
        isLoggedIn={authStatus.isLoggedIn}
      />
    }>
    </SignIn>
  );
}

export default Login;