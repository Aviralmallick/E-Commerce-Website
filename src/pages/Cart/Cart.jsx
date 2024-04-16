import React, { useEffect } from 'react'
import useCart from '../../Hooks/useCart'

const Cart = () => {
  const {getCart,addItemToCart,deleteItemFromCart} = useCart();
  const getMyCart = async()=>{

    const cart = await getCart();
  
  }
  useEffect(()=>{
    getMyCart();
  },[])
  return (
    <div>Cartsss</div>
  )
}

export default Cart