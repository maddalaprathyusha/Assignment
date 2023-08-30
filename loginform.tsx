import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, otp: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    if (email && otp) {
      onLogin(email, otp);
    } else {
      alert('Do enter email and the otp');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="OTP"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
