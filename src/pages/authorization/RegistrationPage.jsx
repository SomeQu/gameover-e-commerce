import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase'
import { useRef } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth"

const RegistrationPage = (props) => {
const [name,setName] =useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate = useNavigate()

 const signUp = async (e)=>{
  e.preventDefault();
   await createUserWithEmailAndPassword(auth,email, password).then(async (cred) => {
     await setDoc(doc(db, "SignedUpUsersData", cred.user.uid ),({
       Name: name,
       Email: email,
       Password: password
     }));
     setName('');
     setEmail('');
     setPassword('');
     navigate('/store')
     });
  //   db.collection('SignedUpUsersData').doc(cred.user.uid).set({
  //     Name: name,
  //     Email: email,
  //     Password: password
  //   }).then(()=>{
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //     props.history.push('/login')
  //   })
  // })
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
          Sign In
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
          Name
          <input
          onChange={(e)=>{setName(e.target.value)}}
          value={name}
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
          <Box sx={{
            display:'flex',
            flexDirection:'column',
          }}>
          Email
          <input
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
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
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            marginTop:'40px'
          }}>
            Password
            <input
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
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
          onClick={signUp}
          sx={{
            border:'1px solid transparent',
            padding:'12px',
            marginTop:'90px',
            width:'460px',
            fontFamily:'qore',
            fontSize:'24px',
            color:'white',
            backgroundColor:'#4050ED'
          }}

          >Sign In</Button>
          <Typography sx={{
            textAlign:'right',
            marginTop:'30px',
            display:'flex',
            justifyContent:'right',
            marginRight:'15px'
          }}>
          Already have an account?
          <Typography sx={{marginLeft:'10px'}}>
          <Link to='/login'>Log In</Link>
          </Typography>
          </Typography>
         </Box>
        </Box>
      </Container>
  
    )
  }
  
export default RegistrationPage