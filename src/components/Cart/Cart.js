const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((a, c) => a + c.price, 0);

  let shippingCost = 0;

  if (totalPrice > 35) {
    shippingCost = 0;
  } else if (totalPrice > 15) {
    shippingCost = 4.99;
  } else if (totalPrice > 0) {
    shippingCost = 12.99;
  }

  const tax = Math.round(totalPrice / 10);

  return (
    <div>
      <h5>Order Summary</h5>
      <p>Items Ordered: {cart.length}</p>
      <p>Shipping Cost: {shippingCost}</p>
      <p>
        <small>Tax + Vat: {tax}</small>
      </p>
      <p>Total: {totalPrice + shippingCost + tax}</p>
    </div>
  );
};

export default Cart;
