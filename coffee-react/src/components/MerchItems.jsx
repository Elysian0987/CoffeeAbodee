import React from 'react';
import ProductItem from './ProductItem'; // Import the reusable ProductItem component

const MerchItems = () => {
  // Data for Coffee Mugs
  const coffeeMugs = [
    {
      image: 'img/PorcelainMug1.jpg',
      alt: 'PorcelainMug',
      title: 'Porcelain Mugs with Gold Accents',
      description: 'Luxurious fine porcelain mugs with delicate gold trims for an elegant touch to your coffee experience.',
      price: '₹262.50',
    },
    {
      image: 'img/Marble-Patterned1.jpg',
      alt: 'Marble-Patterned Mugs',
      title: 'Marble-Patterned Mugs',
      description: 'Visually striking mugs with a marble pattern that mimics natural stone, adding a touch of refinement to your drink.',
      price: '₹899.00',
    },
    {
      image: 'img/MinimalistCeramic1.jpg',
      alt: 'MinimalistCeramic',
      title: 'Minimalist Ceramic Mugs',
      description: 'Sleek and modern ceramic mugs in neutral tones, perfect for a clean and sophisticated aesthetic.',
      price: '₹492.00',
    },
    {
      image: 'img/Hand-Painted2.jpg',
      alt: 'Hand-Painted',
      title: 'Hand-Painted Mugs',
      description: 'Unique mugs featuring beautiful hand-painted designs that bring a touch of artistry and personalization to your coffee routine.',
      price: '₹262.50',
    },
    {
      image: 'img/MatteFinish.jpg',
      alt: 'MatteFinish',
      title: 'Matte Finish Mugs',
      description: 'Mugs with a rich matte finish in deep colors, providing a soft texture and a bold, contemporary look.',
      price: '₹899.00',
    },
    {
      image: 'img/Double-WalledGlass.jpg',
      alt: 'Double-WalledGlass',
      title: 'Double-Walled Glass Mugs',
      description: 'Stylish and functional glass mugs with double-walled insulation, keeping drinks hot while showcasing their beauty.',
      price: '₹492.00',
    },
  ];

  // Data for Brewing Accessories
  const brewingAccessories = [
    {
      image: 'img/FrenchPress.jpg',
      alt: 'FrenchPress',
      title: 'French Press',
      description: 'Elevate your coffee experience with this premium French press, featuring a sleek design and durable materials such as stainless steel or heat-resistant glass for a rich and full-bodied brew.',
      price: '₹399.00',
    },
    {
      image: 'img/PourOver1.jpg',
      alt: 'PourOver',
      title: 'Pour-Over Coffee Maker',
      description: 'Enjoy precise and artisanal brewing with this stylish pour-over coffee maker, complete with a ceramic or glass dripper and quality carafe for a clean and flavorful cup of coffee',
      price: '₹472.50',
    },
    {
      image: 'img/Grinder.jpg',
      alt: 'Grinder',
      title: 'Coffee Grinder',
      description: 'Achieve the perfect grind consistency with this high-quality coffee grinder, offering adjustable settings and modern design for a tailored brewing experience every time.',
      price: '₹278.25',
    },
  ];

  return (
    <> {/* Using a React Fragment to group multiple sections */}
      <section id="coffee-mugs"> {/* Changed ID to match content */}
        <h2>Coffee Mugs</h2>
        <div className="product">
          {coffeeMugs.map((item, index) => (
            <ProductItem
              key={`mug-${index}`} // Unique key
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      <section id="brewing-accessories"> {/* Changed ID to match content */}
        <h2>Brewing Accessories</h2>
        <div className="product">
          {brewingAccessories.map((item, index) => (
            <ProductItem
              key={`brew-acc-${index}`} // Unique key
              imageSrc={item.image}
              altText={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* You'll add other merchandise sections here as needed, like: */}
      {/*
      <section id="tshirts">
        <h2>T-shirts with Coffee Quotes</h2>
        <div className="product">
          // ... map ProductItem for T-shirts
        </div>
      </section>

      <section id="artwork">
        <h2>Coffee-themed Artwork</h2>
        <div className="product">
          // ... map ProductItem for Artwork
        </div>
      </section>
      */}
    </>
  );
};

export default MerchItems;