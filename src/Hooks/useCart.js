import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../Firebase/Firebase'

const useCart = () => {
    const user = JSON.parse(localStorage.getItem('bloguser'));
    const getCart = async()=>{
        console.log("sbjscjhsdbjkcndjkbjdsbjdahc")
        try {
            const userRef=doc(firestore,"users",user.uid);
            const res=await getDoc(userRef);
            if(res.exists()){
                const {cart} = res.data();
               // console.log(res.data())
                return cart;
            }
            console.log("result")
            
         
        } catch (error) {
            console.log(error)
        }
    }

    const addItemToCart = async ()=> {
        
        
    }

    const deleteItemFromCart = async ()=>{

    }
  return {getCart,addItemToCart,deleteItemFromCart}
}

export default useCart