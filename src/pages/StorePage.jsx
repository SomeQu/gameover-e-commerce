import React, { useEffect, useState } from 'react'
import MediaCard from '../components/ProductCard'
import useGetData from '../components/useGetData'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import PaginationApp from '../components/Pagination'
import { useFetcher, useNavigate, useSearchParams } from 'react-router-dom'
import {auth, db} from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const StorePage = () => {
  const navigate = useNavigate()
  
  function GetUserUid(){
    const [uid, setUid]=useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
          setUid(user.uid);
        }
      })
  },[])
  return uid;
}


const uid = GetUserUid();

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
 const currentUser=GetCurrentUser()

  let Product;
  const addToCart =async (product)=>{
      if(uid!==null){
          console.log(product);
          Product=product;
          Product['qty']=1;
          Product['TotalProductPrice']=Product.qty*Product.price;
          const indProdRef= doc(db, 'Cart'+ uid, product.id);
          await setDoc(indProdRef, Product)
          console.log(Product)
          // fs.collection('Cart ' + uid).doc(product.ID).set(Product).then(()=>{
          //     console.log('successfully added to cart');
          // })

      }
      else{
          navigate('/login')
      }
      
  }
console.log(uid)
console.log(currentUser)
  const {data:usersData} =useGetData('SignedUpUsersData')
  const {data:productsData}= useGetData('products')
  const [currentPage, setCurrentPage] =useState(1);
  const [postPerPage, setPostPerPage] =useState(20);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex -postPerPage
  const currentPosts = productsData.slice(firstPostIndex, lastPostIndex)

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div style={{display:'flex',
    flexDirection:'column',
    alignIntems:'center',
    justifyConteint:'center',
    fontFamily:'qore'}}>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter:' blur(10px)',
        marginBottom:'100px'
      }}>

       <input 
      style={{
        fontSize:'22px',
        border:'1px solid #111540',
        padding:'17px 20px'
      }}
       type="text" 
       placeholder="Search here..." 
       onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
      </div>

  <div style={{display:'flex',gap:'30px',alignIntems:'center',justifyContent:'center',flexWrap:'wrap'}}>
    {currentPosts
    .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }else if(val.price.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
    .map(item=>{
      const itemID =Date.now()
      console.log(itemID)
      return  <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
      >
    <Card
    key={itemID}
     sx={{ width: 280,
    height:567,backgroundColor:'transparent',color:'white',fontFamily:'Roboto' }}>
      <CardMedia
        sx={{ height: 400, objectFit:'contain' }}
        image={item.imgURL}
        title=""

      />
      <CardContent>
        <Typography sx={{color:'#FF971E'}} gutterBottom variant="h7" component="div">{item.category}</Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
          width: '119px',
          height: '52px',
          background:' #4F3ACE',
          border:'1px solid #4F3ACE',
          fontSize:'26px',
          fontFamily:'qore',
          color:'white'
        }}>{item.price}</Button>
        <Button size="small"
        sx={{
          width: '119px',
          height: '52px',
          background:' #4F3ACE',
          border:'1px solid #4F3ACE',
          fontSize:'12px',
          fontFamily:'qore',
          color:'white'
        }}>+ to favorite</Button>
        <button onClick={()=>{addToCart(item)}}>
          +Add to cart
        </button>
      </CardActions>
    </Card>
    </Box>
    })}
  </div>
    <PaginationApp
     totalPosts={currentPosts.length} 
     postPerPage={postPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}/>
    </div>
  
  )
}

export default StorePage