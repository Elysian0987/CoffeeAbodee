import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (title, change) => {
    const item = cartItems.find(i => i.title === title);
    if (item) {
      updateQuantity(title, item.quantity + change);
    }
  };

  const formatPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.]/g, '')).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Header />
        <div className="cart-container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/menu" className="shop-btn">Browse Menu</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      <div className="cart-container">
        <section className="cart-hero">
          <h1>Shopping Cart</h1>
          <p className="tagline">Review Your Order</p>
        </section>

        <div className="cart-content">
          <div className="cart-items">
            <h2>Items in Cart ({cartItems.length})</h2>
            
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.imageSrc} alt={item.altText} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                </div>

                <div className="cart-item-quantity">
                  <button 
                    className="qty-btn-cart"
                    onClick={() => handleQuantityChange(item.title, -1)}
                  >
                    −
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="qty-btn-cart"
                    onClick={() => handleQuantityChange(item.title, 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-price">
                  <p className="unit-price">₹{formatPrice(item.price)} each</p>
                  <p className="total-price">₹{(formatPrice(item.price) * item.quantity).toFixed(2)}</p>
                </div>

                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.title)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}

            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/menu" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>{getCartTotal() >= 600 ? 'FREE' : '₹50.00'}</span>
            </div>
            
            <div className="summary-row">
              <span>Tax (5%)</span>
              <span>₹{(getCartTotal() * 0.05).toFixed(2)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{(getCartTotal() + (getCartTotal() >= 600 ? 0 : 50) + (getCartTotal() * 0.05)).toFixed(2)}</span>
            </div>

            {getCartTotal() < 600 && (
              <div className="free-delivery-notice">
                <p>Add ₹{(600 - getCartTotal()).toFixed(2)} more for FREE delivery!</p>
              </div>
            )}

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <div className="payment-icons">
              <p>We accept:</p>
              <div className="icons">
                <span className="payment-method">Credit Card</span>
                <span className="payment-method">UPI</span>
                <span className="payment-method">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
