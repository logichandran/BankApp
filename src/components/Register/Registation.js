import React, { useRef, useState } from 'react';
import './Registation.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink, useNavigate } from 'react-router-dom';
import validator from 'validator';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import {motion} from 'framer-motion'


function Registation() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateName(newName);
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

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(newConfirmPassword);
  };

  const validateName = (value) => {
    if (value.trim() !== '') {
      setNameError('');
    } else {
      setNameError('Name is required');
    }
  };

  const validateEmail = (value) => {
    if (value === '') {
      setEmailError('Fill the Email-ID');
      return;
    }
    if (validator.isEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const validatePassword = (value) => {
    if (value === '') {
      setPasswordError('Fill the Password');
      return;
    }
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordError('');
    } else {
      setPasswordError('Password should be strong');
    }
  };

  const validateConfirmPassword = (value) => {
    if(value===''){
      setConfirmPasswordError('Fill the Password');
      return;
    }
    if (value === password) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before proceeding
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      return;
    }

    if (
      !nameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      // All fields are filled, continue with the registration logic
      

      

      const handlePost = async () => {
        let id=""
        const data = {
          id:id,
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };

        try {
          const response = await axios.post(
            `http://localhost:8080/users`,
            data
          );
          console.log(data);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };

      handlePost();
      navigate('/login');
    }
  };

  return (
    <motion.div className="back"
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
    >
      <Header /><br/>
      <form className="border" onSubmit={handleSubmit}>
        <label>
          <br/>
          <h2>Registration</h2>
        </label>
        <br/><br/>  
        <TextField
          inputProps={{
            sx: {
              color: 'white',
              paddingLeft: '15px',
              fontSize: '20px',
              width: '300px',
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'white',
              textTransform: 'capitalize',
            },
          }}
          id="filled-basic"
          label="Name"
          variant="filled"
          placeholder="Enter Your Name"
          onChange={handleNameChange}
          inputRef={nameRef} 
        />

        <div style={{ color: 'red' }}>{nameError}</div>

        <br />


        <TextField
          inputProps={{
            sx: {
              color: 'white',
              paddingLeft: '15px',
              fontSize: '20px',
              width: '300px',
            },
          }}
          InputLabelProps={{
            sx: {
              color: 'white',
              textTransform: 'capitalize',
            },
          }}
          id="filled-basic"
          label="Email-ID"
          variant="filled"
          placeholder="Enter Your Email-ID"
          onChange={handleEmailChange}
          inputRef={emailRef} 
        />

        <div style={{ color: 'red' }}>{emailError}</div>

        <br />

        <FormControl sx={{ width: '325px' }} variant="filled">
          <InputLabel className="setcol" htmlFor="filled-adornment-password">
            Password
          </InputLabel>
          <FilledInput
            className="setcol"
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className="setcol"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            inputRef={passwordRef} 
          />
        </FormControl>

        <br />
        <br />

        <FormControl sx={{ width: '325px' }} variant="filled">
          <InputLabel className="setcol" htmlFor="filled-adornment-password">
            Confirm Password
          </InputLabel>
          <FilledInput
            className="setcol"
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className="setcol"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div style={{ color: 'red' }}>{passwordError}</div>
        <div style={{ color: 'red' }}>{confirmPasswordError}</div>

        <br />

        <Button
          sx={{ color: 'white', borderColor: 'white' }}
          variant="outlined"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </Button>

        <hr class="lc"></hr>
        <NavLink to="/login" underline="hover" className="setcol">
          {'Already have an account'}
        </NavLink>
      </form>
      <br/>
      <Footer />
    </motion.div>
  );
}

export default Registation;