import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, provider } from '../firebase/firebase';
import '../styles/Login.css';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button color="primary" variant="contained" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
