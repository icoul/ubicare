import React from 'react';
import login_bg from 'static/images/login/login_bg.jpg';
import './SignIn.css';
import { FaPhone, FaFax, FaMailBulk } from 'react-icons/fa';
 
const SignIn = ({form}) => {
  var backgroundStyle = {
    backgroundImage: `url(${login_bg})`,
    backgroundSize: `cover`
  };

  return (
    <main style={backgroundStyle} className="signIn">
      <div className="loginContainer">
        {form}
      </div>
      <div className="companyInfo">
        울산광역시 중구 종가로 362-11 울산과학기술진흥센터 301호 (44428) <br/>
        기술문의 : &nbsp;&nbsp;
        <FaPhone/> 052-289-8051 &nbsp;&nbsp;&nbsp;&nbsp;
        <FaFax/> 052-970-1012 &nbsp;&nbsp;&nbsp;&nbsp;
        <FaMailBulk/> leeki_ubi@naver.com
      </div>
    </main>
  );
};
 
export default SignIn;