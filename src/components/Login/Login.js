import React, { useContext, useState } from 'react';
import axios from 'axios';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import validator from 'validator';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserContext from '../Context/UserContext';
import {motion} from 'framer-motion' 

function Login() {
  const{user,login}=useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginType, setLoginType] = useState('user');
  const navigate = useNavigate();
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = email.trim();
    const passwordValue = password.trim();

    
    if (emailValue === '') {
      setEmailError('Fill the Mail-ID');
      return;
    }
    if (passwordValue === '') {
      setPasswordError('Fill the Password');
      return;
    }

    
    try {
      const response = await axios.get(
        `http://localhost:8080/users?email=${emailValue}&password=${passwordValue}`
      );

      if (response.data.length > 0) {
        
        console.log('Login successful');
        login(email) 
        navigate('/'); 
      } else {
        
        setEmailError('Invalid email or password');
        setPasswordError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      
      setEmailError('Error during login');
      setPasswordError('Error during login');
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validateEmail = (value) => {
    if (validator.isEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const validatePassword = (value) => {
    if (value.trim() !== '') {
      setPasswordError('');
    } else {
      setPasswordError('Password is required');
    }
  };

  return (
    <>
      <motion.div className="Back"
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
        <Header />
        <pre>  </pre>

        <form className="Border" onSubmit={handleSubmit}>
          <label>
            <h2>{loginType === 'admin' ? 'Admin' : 'User'} Login</h2>
          </label>
          <br/>
          <TextField
            inputProps={{
              sx: {
                color: 'white',
                paddingLeft: '15px',
                fontSize: '20px',
                width: '250px',
                
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                textTransform: 'capitalize',
              },
            }}
            sx={{
              border: '3px solid white',
            }}
            id="filled-basic"
            label="Mail-ID"
            variant="filled"
            placeholder="Enter your Email-ID"
            onChange={handleEmailChange}
          />

          <div style={{ color: 'red' }}>{emailError}</div>

          <br />
         

          <FormControl
            sx={{
              border: '3px solid white',
              width: '280px',
            }}
            variant="filled"
          >
            <InputLabel className="setcolo" htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              
              className="setcolo"
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className="setcolo"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handlePasswordChange}
            />
          </FormControl>

          <div style={{ color: 'red' }}>{passwordError}</div>

          <br />
          {/* <br /> */}

          <Button variant="outlined" type="submit" sx={{ color: 'white', borderColor: 'white' }}>
            Login
          </Button>
          <hr></hr>
          <div>
            <Button
              variant="outlined"
              type="submit"
              sx={{ color: 'white', borderColor: 'white' }}
              onClick={() => setLoginType('user')}
              className="setcolo"
            >
              User Login
            </Button>
            .|.
            <Button
              variant="outlined"
              type="submit"
              sx={{ color: 'white', borderColor: 'white' }}
              onClick={() => setLoginType('admin')}
              className="setcolo"
            >
              {' '}
              Admin Login
            </Button>
          </div>
          <br />
          <NavLink to="/registration" underline="hover" className="setcolo">
            {"Don't have an account"}
          </NavLink>
        </form>
      </motion.div>
      <Footer />
    </>
  );
}

export default Login;