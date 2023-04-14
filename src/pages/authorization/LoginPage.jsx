import { Box, Button, Container, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import loginimg from './Rectangle 1.jpg'
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom'
import { auth, logIn, useAuth } from '../../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


const LoginPage = (props) => {
const navigate =useNavigate()
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      setEmail('');
      setPassword('');
      navigate('/')
      console.log(`Hi ${auth.currentUser}`)
    })
  }
  return (
    <Container sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginTop:'30px'
    }}>
      <Box
      sx={{
        width:'500px',
        height:'700px',
        display:'flex',
        flexDirection:'column',
        alignItems:'left',
        backgroundColor:'#111540'
    }}
       style={{color:'white'}}>
       <Typography 
       sx={{
        marginTop:'30px',
        marginLeft:'168px',
        fontFamily:'qore',
        fontSize:'40px'}}>
        Log In
       </Typography>
       <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'left',
        justifyContent:'left',
        fontFamily:'Roboto',
        fontSize:'24px',
        marginLeft:'20px',
        marginTop:'40px'
       }}>
        <Box sx={{
          display:'flex',
          flexDirection:'column',

        }}>
        Email
        
        <input
         onChange={(e) => setEmail(e.target.value)} value={email}
         style={{
          fontSize:'18px',
          width: '460px',
          height: '54px',
          padding:'10px',
          marginTop:'10px',
          border:'1px solid #4050ED'}}
           type="text"
           placeholder='Email' />
        </Box>
        <Box
         sx={{
          display:'flex',
          flexDirection:'column',
          marginTop:'40px'
        }}>
          Password
          <input
             onChange={(e) => setPassword(e.target.value)} value={password}
           style={{
          fontSize:'18px',
          width: '460px',
          height: '54px',
          padding:'10px',
          marginTop:'10px',
          border:'1px solid #4050ED'}}
           type="text"
           placeholder='Email' />
        </Box>
        <Button
        onClick={login}
         sx={{
          border:'1px solid transparent',
          padding:'12px',
          marginTop:'90px',
          width:'460px',
          fontFamily:'qore',
          fontSize:'24px',
          color:'white',
          backgroundColor:'#4050ED'
        }}>Log In</Button>
        <Typography sx={{
          textAlign:'right',
          marginTop:'30px',
          display:'flex',
          justifyContent:'right',
          marginRight:'15px'
        }}>
        Haven't an account yet?
        <Typography sx={{marginLeft:'10px'}}>
        <Link to='/registration'>Sign In</Link>
        </Typography>
        </Typography>
       </Box>
      </Box>
    </Container>

  )
}

export default LoginPage