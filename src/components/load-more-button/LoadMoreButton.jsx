import "./LoadMoreButton.css";
import { useState, useEffect } from "react";

const LoadMoreButton = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(prevData => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      setError(error);
    }
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabled(true);
  }, [products]);

  if (isLoading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products &&
          products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="product" key={index}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            );
          })}
      </div>
      <div className="button-container">
        <button
          disabled={disabled}
          onClick={() => setCount(count => count + 1)}
        >
          Load More Products
        </button>
        {disabled ? (
          <div>
            <p>You have reached the end of the products</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreButton;
