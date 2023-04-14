import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc, onSnapshot, collection, updateDoc, deleteDoc } from 'firebase/firestore';
import thrashcan from '../images/Vector (1).svg'
import { Button } from '@mui/material';
import vectorOne from '../images/Frame 22.svg'
import vectorTwo from '../images/Frame 23.svg'
const CartPage = () => {

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

   async function getCurrentUsersCart(product) {
        const indProdRef= doc(db, 'Cart'+ uid, product.id);
        await setDoc(indProdRef, Product)
    }
    const [cartProducts, setCartProducts]=useState([]);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            console.log(user)
            if(user){
                onSnapshot(collection(db,'Cart'+ user.uid),(snapshot)=>{
                    const newCartProduct = snapshot.docs.map((doc)=>({
                        id:doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct)
                })
             
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
        console.log(cartProducts)
    },[])



    const cartProductIncrease=(cartProduct)=>{
        // console.log(cartProduct);
        Product=cartProduct;
          Product.qty=Product.qty+1;
        Product.TotalProductPrice=Product.qty*Product.price;
        // updating in database
        auth.onAuthStateChanged(async user=>{
            if(user){
              const indProdRef= doc(db, 'Cart'+ user.uid, cartProduct.id);
              await updateDoc(indProdRef, {Product})
              console.log('increment added')
              console.log(indProdRef)
            }
            else{
                console.log('user is not logged in to increment');
            }
        })
    }

    const handleCartProductDelete=(cartProduct)=>{
      auth.onAuthStateChanged(async user=>{
          if(user){
             const indProdRef= doc(db, 'Cart'+ user.uid, cartProduct.id);
             await deleteDoc(indProdRef)
          }
      })
  }

let total = 0
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    }}>
      <h1 style={{color:'white',fontFamily:'qore',fontSize:'40px',marginTop:'40px',marginBottom:'30px'}}><img src={vectorOne} /> BUSKET <img src={vectorTwo} alt="" /></h1>
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        color:'white'
    }}>
        <table 
        style={{
          width:'1200px',
          fontFamily:'Roboto',
          textAlign:'left'}}>
            <thead>
                <tr>
                  <th>Quantity</th>
                    <th>Name of product</th>
                    <th>Category</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map((item, index)=>{
                  total += item.TotalProductPrice
                    return <tr style={{backgroundColor:'#212659',}} key={item.id}>
                      <td>
                        <Button onClick={()=>{cartProductIncrease(item)}}>+</Button>
                        {item.qty}
                        <Button>-</Button></td>
                        <td style={{padding:'20px'}} ><img src={thrashcan} onClick={()=>{handleCartProductDelete(item)}} style={{width:'20px', height:'20px',cursor:'pointer'}} alt="" /> {item.title}</td>
                        <td >{item.category}</td>
                        <td>${item.TotalProductPrice}</td>
                     
                    </tr>
                    
                })}
            </tbody>
        </table>
    </div>
    <div style={{fontFamily:'Roboto',color:'white', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',border:'1 px solid #111540',backgroundColor:'#111540',width:'500px',height:'222px',marginTop:'120px',marginLeft:'700px'}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:'300px',alignItems:'center'}}>
        <h2 style={{fontSize:'24px'}}>Total</h2>
        <p style={{fontSize:'30px'}}>${total.toFixed(2)}</p>
      </div>
      <button style={{marginTop:'60px',border:'1px solid #4050ED',backgroundColor:'#4050ED',padding:'12px 201px',fontFamily:'qore',fontSize:'24px'}}>PAY</button>
    </div>
        </div>
  )
}

export default CartPage