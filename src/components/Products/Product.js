import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({ name, img, seller, price, stock, handleAddToCart, id}) => {
  return (
    <div>
      <div className='product'>
        <div>
          <img src={img} alt='product' />
        </div>
        <div>
          <h4 className='product-name'>{name}</h4>
          <br />
          <p>
            <small>by: {seller}</small>
          </p>
          <p>${price}</p>

          <p>
            <small>Only {stock} left in stock - Order soon</small>
          </p>

          <button onClick={(e) => handleAddToCart(id)} className='main-button'>
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
