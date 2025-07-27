import React from 'react';
import ProductItem from './ProductItem'; // Import ProductItem here

const MenuItems = () => {
  // Data for Coffee Products
  const coffeeItems = [
    {
      image: 'img/Espresso.jpeg',
      alt: 'Espresso',
      title: 'Premium Espresso Blend',
      description: 'A well-balanced blend of Arabica and Robusta beans with a rich flavor profile.',
      price: '₹262.50',
    },
    {
      image: 'img/Affogato.jpeg',
      alt: 'Affogato',
      title: 'Indulgent Affogato',
      description: 'A luxurious treat featuring a scoop of velvety vanilla ice cream drowned in a shot of rich espresso.',
      price: '₹899.00',
    },
    {
      image: 'img/Cappuccino.jpeg',
      alt: 'Cappuccino',
      title: 'Classic Cappuccino',
      description: 'Espresso blend without the caffeine, perfect for late-night indulgence.',
      price: '₹492.00',
    },
  ];

  // Data for Signature Drinks
  const signatureDrinkItems = [
    {
      image: 'img/Frappe.jpeg',
      alt: 'Frappe',
      title: 'Choco Bliss Frappe',
      description: 'Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice.',
      price: '₹399.00',
    },
    {
      image: 'img/Latte.jpeg',
      alt: 'Latte',
      title: 'Coconut Amarula Latte',
      description: 'Silky smooth delicious beverage combines signature espresso, steamed milk, mocha sauce and Vanilla Mascarpone sauce.',
      price: '₹472.50',
    },
    {
      image: 'img/Cortado.jpeg',
      alt: 'Cortado',
      title: 'Cortado',
      description: 'A perfect espresso shot topped with steamed milk.',
      price: '₹278.25',
    },
  ];

  // Data for Pastries, Cookies & Muffins
  const pastriesItems = [
    {
      image: 'img/Croissants.jpeg',
      alt: 'Croissants',
      title: 'Croissants',
      description: 'Classic French pastry made with buttery layers of dough, perfect for breakfast or a snack.',
      price: '₹99.00',
    },
    {
      image: 'img/Cookies.jpeg',
      alt: 'Cookies',
      title: 'Chocolate Chip Cookies',
      description: 'Homemade cookies packed with chunks of chocolate for a delightful treat.',
      price: '₹149.00',
    },
    {
      image: 'img/Muffins.jpeg',
      alt: 'Muffins',
      title: 'Blueberry Muffins',
      description: 'Moist and fluffy muffins bursting with juicy blueberries, perfect for breakfast or brunch.',
      price: '₹129.00',
    },
  ];

  // Data for Cheesecake Cupcakes (MOVED HERE)
  const cupcakeItems = [
    {
      image: 'img/Cheesecake.jpeg',
      alt: 'Cheesecake',
      title: 'Cheesecake Cupcake',
      description: 'Delicious individual cheesecakes with a buttery biscuit base and creamy cheese filling, topped with your choice of fruit compote.',
      price: '₹109.00',
    },
    {
      image: 'img/DarkChoco.jpeg',
      alt: 'Dark Choco',
      title: 'Dark Chocolate Cupcake',
      description: 'Indulgent chocolate cupcakes made with rich dark chocolate, perfect for satisfying your chocolate cravings.',
      price: '₹159.00',
    },
    {
      image: 'img/ChocoCream.jpeg',
      alt: 'Choco Cream',
      title: 'Choco Cream Cupcake',
      description: 'Decadent chocolate cupcakes filled with creamy chocolate filling and topped with a swirl of chocolate frosting.',
      price: '₹139.00',
    },
  ];

  return (
    <> {/* Using a React Fragment to group multiple sections */}
      <section id="coffee-products">
        <h2>Coffee Products</h2>
        <div className="product">
          {coffeeItems.map((item, index) => (
            <ProductItem
              key={`coffee-${index}`}
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      <section id="signature-drinks">
        <h2>Signature Drinks</h2>
        <div className="product">
          {signatureDrinkItems.map((item, index) => (
            <ProductItem
              key={`signature-${index}`}
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      <section id="pastries-cookies-cupcakes">
        <h2>Pastries Cookies & Muffins</h2>
        <div className="product">
          {pastriesItems.map((item, index) => (
            <ProductItem
              key={`pastry-${index}`}
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* Cheesecake Cupcakes Section (NOW INSIDE MenuItems) */}
      <section id="cupcake-pastry">
        <h2>Cheesecake Cupcakes</h2>
        <div className="product">
          {cupcakeItems.map((item, index) => (
            <ProductItem
              key={`cupcake-${index}`}
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuItems;