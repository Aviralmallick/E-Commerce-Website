import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [image , setImage] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setImage(data.thumbnail)
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="detail-container">
            {product && (
                <div className="product-details">
                    <div className="product-image">
                        <img src={image?image:product.thumbnail} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price">
                            <span className="price">Rs: {product.price}</span>
                            <span className="discount">Discount: {product.discountPercentage}%</span>
                        </div>
                        <p className="product-rating">Ratings: {product.rating}</p>
                        <p className="product-stock">Stocks Left: {product.stock}</p>
                        <button className='addToCart'>Add To Cart</button>
                    </div>
                </div>
            )}
            {product && (
                <div className="image-gallery">
                    <h3>Image Gallery</h3>
                    <div className="gallery-images">
                        {product.images.map((image, index) => (
                            <div className="" onClick={()=>setImage(image)}>
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
