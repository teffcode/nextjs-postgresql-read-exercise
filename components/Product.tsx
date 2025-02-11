import { useState, useEffect } from "react";
import { ProductType } from "@/types/ProductType";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        
        if (!response.ok) {
          throw new Error(`HTTP error ! Status ${response.status}`)
        }

        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <h1>Products:</h1>
      {
        products.map(product => (
          <div key={product.id}>
            <p>Name: ${product.name}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      }
    </section>
  );
};

export default Product;
