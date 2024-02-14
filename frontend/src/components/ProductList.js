import React, { useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Product List */}
      <div style={{ flex: 1 }}>
        <div>
          <h2><AddCircleRoundedIcon/>Product List</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div>
                  <strong>{product.name}</strong> - ${product.price}
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Shopping Cart (Centered) */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <h2><AddShoppingCartOutlinedIcon/> Shopping Cart</h2>
          <ul>
            {cart.map((cartProduct, index) => (
              <li key={index}>{cartProduct.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* To-Do List (Right Margin) */}
      <div style={{ flex: 1, marginLeft: '20px' }}>
        {/* Add your To-Do List component here */}
      </div>
    </div>
  );
};

export default ProductList;