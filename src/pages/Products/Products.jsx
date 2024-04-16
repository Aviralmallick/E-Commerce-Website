import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import '../HomePage/HomePage.css'

const Products = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState();

    const { category } = useParams();
    const fetchItems = async () => {
        try {
          const response = await 
          fetch(`https://dummyjson.com/products/category/${category}`); // API endpoint
          const data = await response.json();
          console.log(data)
          setProducts(data.products)
      
        }catch(e){
            console.log(e.message)
        }
      };

      useEffect(()=>{fetchItems()},[])

      const handleClick = (id) => {
        navigate(`/details/${id}`);
      };
  
    

    return (
    <div className='products-container'>
        {products &&
        products.map((product, index) => {
          return (
            <div
              onClick={() => {
                handleClick(product.id);
              }}
              className="product"
            >
              <img className="product-image" src={product.thumbnail} alt="" />
              <h3>{product.title}</h3>
              <div>
                <span className="firstProductPD">Rs:{product.price}</span>
                <span className="firstProductPD">
                  Discount:{product.discountPercentage}
                </span>
              </div>
              <p> Discription:{product.description}</p>
              <p> Rating:{product.rating}</p>
            </div>
          );
        })}
    </div>
  )
}

export default Products