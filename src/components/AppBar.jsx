import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../styles/AppBarStyles.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
// import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../firebase'
import { signOut } from 'firebase/auth';
import CartIMG from '../images/Vector.svg'
const pages = [{
    title:'Store',
    link:'/store',
},
{
    title:'Community',
    link:'/community',
},
{
    title:'About',
    link:'/about',
},
{
    title:'Support',
    link:'/support',

}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ResponsiveAppBar() {

  function handleLogOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  
 function GetCurrentUser(){
    const [user, setUser] =useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(async user=>{
        if(user){
          const docRef = doc(db, "SignedUpUsersData", user.uid);
          const docSnap = await getDoc(docRef);
         setUser(docSnap.data().Name)
        }else{
          setUser(null)
        }
      })

    },[])
    return user
  }
  const test=GetCurrentUser()


  const [isActive,setIsActive]=useState(null)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const navigate = useNavigate()
  return (
    <AppBar
     position="static" style={{padding:'30px 100px',background:'transparent', boxShadow: 'none',background: 'rgba(6, 8, 31, 0.15)',
     backdropFilter: 'blur(10px)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'qore',
              fontWeight: 400,
              fontSize:40,
              color:'inherit',
              textDecoration: 'none',
              transition:'0.3s',
              "&:hover":{
                fontSize:43,
   
              }
            }}
          >
            GAMEOVER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',  },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography
                  component={Link}
                  to={page.link}
                   textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'qore',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GAME OVER
          </Typography>
          <Box sx={{
            marginLeft:'auto',
            marginRight:'auto',
           gap:'50px',
             display: { xs: 'none', md: 'flex', }}}>
            {pages.map((page) => (
              <Button
                component={NavLink}
                to={page.link}
                className='nav-but' 
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={
                    { 
                    color: 'white',
                     display: 'block',
                    fontSize:'24px',
                    fontFamily:'Roboto',
                    textTransform:'capitalize',
                    '&.active': {
                        background:'linear-gradient(180deg, rgba(33, 38, 89, 0) 0%, #212659 100%)',
                        borderBottom:'1px solid #4050ED',
                      }}}
              >
                {page.title}
              
              </Button>
            ))}
          </Box>
              {!test&&  <Box sx={{ border:'0px solid black',
                transform: 'skew(-30deg)',
                 background:'linear-gradient(180deg, rgba(33, 38, 89, 0) 0%, #212659 100%)'}}>
            <Button
            component={Link}
            to='/login'
             sx={{
                fontSize:'24px',
                fontFamily:'Roboto',
                textTransform:'capitalize',
                transform: 'skew(30deg)',
                padding: '0px 40px',
            }} color="inherit">Log in</Button>
          </Box>}
          {/* <Box sx={{ border:'0px solid black',
                transform: 'skew(-30deg)',
                 background:'linear-gradient(180deg, rgba(33, 38, 89, 0) 0%, #212659 100%)'}}>
            <Button
            component={Link}
            to='/login'
             sx={{
                fontSize:'24px',
                fontFamily:'Roboto',
                textTransform:'capitalize',
                transform: 'skew(30deg)',
                padding: '0px 40px',
            }} color="inherit">Log in</Button>
          </Box> */}
          {test&&  <Box sx={{display:'flex', gap:'10px',alignItems:'center'}}>Hi {test}
          <Box sx={{ border:'0px solid black',
                transform: 'skew(-30deg)',
                 background:'linear-gradient(180deg, rgba(33, 38, 89, 0) 0%, #212659 100%)'}}>
            <Button
            onClick={()=>{
              handleLogOut();
              navigate('/')
            }}
             sx={{
                fontSize:'16px',
                fontFamily:'Roboto',
                textTransform:'capitalize',
                transform: 'skew(30deg)',
                padding: '0px 40px',
            }} color="inherit">Log Out</Button>
          </Box>
            <Button 
            component={Link}
            to='/cart' >
              <img style={{
                width:'20px',
                height:'20px'
              }} src={CartIMG} alt="" />
            </Button>
          </Box>
}
          {/* <Box>Hi {test}</Box> */}

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;