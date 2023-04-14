import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import heroimage from '../images/image 3 (1).jpg';
import { Button, Typography } from '@mui/material';


export default function Demoversion() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{display:'flex', width:'1200px',height:'500px'}}>
        <Box className='left-box' sx={{ 
            bgcolor: '#cfe8fc',
            width:'900px',
            }}>
             <Box sx={{
                backgroundColor:' linear-gradient(90deg, rgba(33, 38, 89, 0.7) 25.9%, rgba(0, 0, 0, 0) 56.72%)',
                display:'flex',
                flexDirection:'column',
                height:'500px',
                
             }}
             style={{background:'linear-gradient(90deg, rgba(33, 38, 89, 0.7) 25.9%, rgba(0, 0, 0, 0) 56.72%)' }}>
              <Box sx={{
                marginLeft:'30px',
                marginTop:'238px',
                width:'300px',
                fontFamily:'Roboto',
                color:'white'
              }}>
                <Typography
                variant='h4'
                component='h1'
                sx={{
                    fontFamily:'qore',
                    color:'white'
                }}>Crime Boss</Typography>
                <Typography sx={{
                    fontFamily:'Roboto',
                    variant:'h5'
                }}>Crime Boss: Rockay City is an organized crime game combining first-person shooter action and turf wars...    </Typography>
                <Button sx={{
                    border:'1px solid #4F3ACE',
                    backgroundColor:'#4F3ACE',
                    width:'161px',
                    height:'57px',
                    fontSize:'30px',
                    fontFamily:'qore',
                    color:'white',
                    marginTop:'30px'
                }}>35.99$</Button>
                <Box sx={{
                    display:'flex',
                     justifyContent:'space-between',
                     marginTop:'5px'}}>
                <Button sx={{
                    color:'white',
                    textTransform:'capitalize'
                }}>+ Add to wishlist</Button>
                <Box sx={{
                    border:'1px solid  #4F3ACE',
                    transform:'skew(-30deg)',
                    backgroundColor:'#4F3ACE',
          
                }}>
                <Button sx={{
                    transform:'skew(30deg)',
                    color:'white',
                  
                 
                 
                }}>BUY NOW</Button>
                </Box>
                </Box>
                </Box>
            </Box>   
        </Box>
        <Box sx={{width:'15px', }} />
        <Box sx={{ bgcolor: '#06081F',width:'285px',}} >
            <Box sx={{
                display:'flex', 
                color:'white',
                 alignItems:'center',
                 paddingBottom:'24px',
                  "&:hover":{
                    backgroundColor:'#111540;'
                  }}}>
                <img style={{
                    width:'60px',
                    height:'60px',
                    objectFit:'cover'
                }} src={heroimage} alt="" />
                <Typography sx={{
                    marginLeft:'10px',
                    gap:'24px',
                    fontSize:'24px'
                }}
                >
                    Crime boss
                </Typography>
            </Box>
            <Box sx={{
                display:'flex', 
                color:'white',
                 alignItems:'center',
                 paddingBottom:'24px',
                  "&:hover":{
                    backgroundColor:'#111540;'
                  }}}>
                <img style={{
                    width:'60px',
                    height:'60px',
                    objectFit:'cover'
                }} src={heroimage} alt="" />
                <Typography sx={{
                    marginLeft:'10px',
                    gap:'24px',
                    fontSize:'24px'
                }}
                >
                    Crime boss
                </Typography>
            </Box>
            <Box sx={{
                display:'flex', 
                color:'white',
                 alignItems:'center',
                 paddingBottom:'24px',
                  "&:hover":{
                    backgroundColor:'#111540;'
                  }}}>
                <img style={{
                    width:'60px',
                    height:'60px',
                    objectFit:'cover'
                }} src={heroimage} alt="" />
                <Typography sx={{
                    marginLeft:'10px',
                    gap:'24px',
                    fontSize:'24px'
                }}
                >
                    Crime boss
                </Typography>
            </Box>
            <Box sx={{
                display:'flex', 
                color:'white',
                 alignItems:'center',
                 paddingBottom:'24px',
                  "&:hover":{
                    backgroundColor:'#111540;'
                  }}}>
                <img style={{
                    width:'60px',
                    height:'60px',
                    objectFit:'cover'
                }} src={heroimage} alt="" />
                <Typography sx={{
                    marginLeft:'10px',
                    gap:'24px',
                    fontSize:'24px'
                }}
                >
                    Crime boss
                </Typography>
            </Box>
            <Box sx={{
                display:'flex', 
                color:'white',
                 alignItems:'center',
                 paddingBottom:'24px',
                  "&:hover":{
                    backgroundColor:'#111540;'
                  }}}>
                <img style={{
                    width:'60px',
                    height:'60px',
                    objectFit:'cover'
                }} src={heroimage} alt="" />
                <Typography sx={{
                    marginLeft:'10px',
                    gap:'24px',
                    fontSize:'24px'
                }}
                >
                    Crime boss
                </Typography>
            </Box>
            <Box sx={{
                display:'flex', 
                color:'white',
                 alignItems:'center',
                 paddingBottom:'24px',
                  "&:hover":{
                    backgroundColor:'#111540;'
                  }}}>
                <img style={{
                    width:'60px',
                    height:'60px',
                    objectFit:'cover'
                }} src={heroimage} alt="" />
                <Typography sx={{
                    marginLeft:'10px',
                    gap:'24px',
                    fontSize:'24px'
                }}
                >
                    Crime boss
                </Typography>
            </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}