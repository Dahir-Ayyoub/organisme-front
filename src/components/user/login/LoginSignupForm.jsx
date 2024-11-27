import React, { useState } from 'react';
import '../../../assets/css/loginsignup.css'; 
const LoginSignupForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };
  return (
    <>
    <div className='contain'>
    <section className={`wrapper ${isLoginActive ? 'active' : ''}`}>
      <div className="form signup">
        <header onClick={toggleForm}>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" className='signup-btn' value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header onClick={toggleForm}>Login</header>
        <form action="#">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href=" ">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
    </div>
    </>
  );
};

export default LoginSignupForm;