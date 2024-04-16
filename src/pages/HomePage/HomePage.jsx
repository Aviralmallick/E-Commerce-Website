import { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const [limit, setLimit] = useState(12);

  const fetchProducts = async (limit) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}`
    ); //api endpoint
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };
  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    fetchProducts(limit);

  }, []);

  return (
    <div className="homepage">
      <div className="products-container">
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

        <div className="circle-container">
          {!products && (
            <div className="circle">
              <div className="circle-inner"></div>
            </div>
          )}
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="homepagebutton"
          onClick={() => {
            if (limit < 101) {
              fetchProducts(limit + 12);
              setLimit(limit + 12);
            } else {
              alert("no more products available,plss come after some time");
            }
          }}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
