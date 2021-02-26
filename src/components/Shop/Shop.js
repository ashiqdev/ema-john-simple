import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    const product = products.find((product) => product.key === id);
    const newCart = [...cartItems, product];
    setCartItems(newCart);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product
            key={product.key}
            id={product.key}
            handleAddToCart={handleAddToCart}
            {...product}
          />
        ))}
      </div>

      <div className='cart-container'>
        <Cart cart={cartItems} />
      </div>
    </div>
  );
};

export default Shop;
