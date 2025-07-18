import React from 'react';
import './Home.css'; // You can extract to SignatureDrinks.css later

function SignatureDrinks() {
  return (
    <section className="drinks">
      <h2>Signature Drinks</h2>
      <div className="product">
        {[1, 2, 3].map((id) => (
          <div key={id} className="product-item">
            <img
              className="product-image"
              src={`${process.env.PUBLIC_URL}/img/coffee${id}.png`}
              alt={`Coffee Product ${id}`}
              width="500"
              height="600"
            />
            <h3>
              {id === 1
                ? 'Double Choco Chip Frappaccino'
                : id === 2
                ? 'Vienna Creamy Latte'
                : 'Cortado'}
            </h3>
            <p>
              {id === 1
                ? 'Rich mocha-flavored sauce meets up with chocolaty chips...'
                : id === 2
                ? 'Silky smooth delicious beverage combines...'
                : 'A perfect espresso shot topped with steamed milk.'}
            </p>
            <p>{id === 1 ? '₹399.00' : id === 2 ? '₹472.50' : '₹278.25'}</p>
            <div className="buy-btn">Buy</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SignatureDrinks;
