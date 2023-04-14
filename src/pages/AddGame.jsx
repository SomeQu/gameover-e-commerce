import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import {db, storage} from '../firebase.js'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { collection, addDoc, setDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify';
const AddGame = () => {

    const [enterTitle, setEnterTitle] =useState('');
    const [enterDescription, setEnterDescription] =useState(''); 
    const [enterPrice, setEnterPrice] =useState('');
    const [enterCategory, setEnterCategory] =useState('');
    const [enterImg, setEnterImg] =useState(null); 
    const [loading, setLoading] =useState(false)
    
    const addGameToStorage = async (e)=>{
        e.preventDefault();

        try {
            const docRef= await collection(db, "products" );
            const storageRef = ref(storage, `productImages/${Date.now()+enterImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, enterImg);

            uploadTask.on(()=>{
                toast.error('image not uploaded')
            },
                ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
                    await addDoc(docRef, {
                        title:enterTitle,
                        description: enterDescription,
                        price: enterPrice,
                        category: enterCategory,
                        imgURL: downloadURL
                    })
                  console.log(docRef.id)
                })
            })
        } catch (error) {
            console.error("writeToDB failed. reason :", error)
        }
    }
  return (
    <Container sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontFamily:'Roboto',
        fontSize:'24px'
    }}>
        <Box sx={{
            display:'flex',
            justifyContent:'left',
            flexDirection:'column'
        }}>
            <Typography sx={{
                fontSize:'48px',
                fontFamily:'qore'
            }}>
                 Add product
            </Typography>
        <Box>
            <Typography >
                Title
            </Typography>
            <input 
            type="text" 
            style={{
                width:'460px',
                border:'1px solid #4050ED',
                marginTop:'15px'
            }}
            value={enterTitle}
            onChange={e=>setEnterTitle(e.target.value)}/>
        </Box>
        <Box>
            <Typography>
                description
            </Typography>
            <input 
            type="text" 
            style={{
                width:'460px',
                border:'1px solid #4050ED',
                marginTop:'15px'
            }} 
            value={enterDescription}
            onChange={e=>setEnterDescription(e.target.value)}/>
        </Box>
        <Box>
            <Typography>
                Price
            </Typography>
            <input 
            type="text" 
            style={{
                width:'460px',
                border:'1px solid #4050ED',
                marginTop:'15px'
            }} 
            value={enterPrice}
            onChange={e=>setEnterPrice(e.target.value)}/>
        </Box>
        <Box>
            <Typography>
                Category
            </Typography>
            <input
             type="text" 
             style={{
                width:'460px',
                border:'1px solid #4050ED',
                marginTop:'15px'
            }} 
            value={enterCategory}
            onChange={e=>setEnterCategory(e.target.value)}/>
        </Box>
        <Box>
            <Typography>
                Image
            </Typography>
            <input 
            type="file" 
            style={{
                fontSize:'14px'
            }} 
            onChange={e=>setEnterImg(e.target.files[0])}
            />
        </Box>
        <Button sx={{
            border:'1px solid #4050ED',
            width:'460px',
            backgroundColor:'#4050ED',
            fontSize:'24px',
            color:'white',
            marginTop:'25px'
        }}
        onClick={addGameToStorage}>
            Upload
        </Button>
        </Box>
    </Container>
  )
}

export default AddGame