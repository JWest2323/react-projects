import "./LoadMoreButton.css";
import { useState, useEffect } from "react";

const LoadMoreButton = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

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
        setProducts(result.products);
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      setError(error);
    }
  }, []);

  if (isLoading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products &&
          products.length > 0 &&
          products.map(product => {
            return (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.name} />
                <p>{product.title}</p>
              </div>
            );
          })}
      </div>
      <div className="button-container">
        <button>Load More Products</button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
