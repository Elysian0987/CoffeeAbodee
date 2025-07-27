import React, { useEffect } from 'react';
// import './Merch.css'; // Import the CSS file for Merch component
import { Link } from 'react-router-dom'; // Import Link for navigation

// Assuming Footer is a React component you already have
import Footer from '../components/Footer'; // Adjust path if Footer is in a different location

function Merch() {
    useEffect(() => {
        // JavaScript logic for "Buy" button and local storage
        const toggleButtons = document.querySelectorAll('.toggle-buy-btn');

        toggleButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                const parentBox = button.closest('.product-item');
                const productName = parentBox.querySelector('h3').textContent;
                const productPrice = parentBox.querySelector('p:last-of-type').textContent;
                const productImage = parentBox.querySelector('.product-image').getAttribute('src');

                const product = {
                    name: productName,
                    price: productPrice,
                    images: [productImage]
                };

                addToCart(product);
                button.textContent = 'Added to Cart';
            });
        });

        // Functions for local storage (can be moved to a separate utility file if complex)
        function addToCart(product) {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }

        // Note: displayCartItemsOnPage and getCartItemsFromLocalStorage are likely for a separate Cart page
        // If you have a Cart.jsx, those functions should be there.
        // For Merch.jsx, we only need addToCart.

        // Cleanup function if needed (e.g., to remove event listeners)
        return () => {
            toggleButtons.forEach(button => {
                // You'd need to store the specific listener function to remove it,
                // or consider a more React-centric way of handling this (e.g., state for button text).
            });
        };
    }, []); // Empty dependency array means this runs once after initial render

    return (
        <>
            <header>
                <img src={process.env.PUBLIC_URL + '/img/LOGO.png'} alt="Logo" />
                <h1>Coffee Abode</h1>
            </header>

            <nav>
                {/* Use Link component for internal navigation */}
                <Link to="/">Home</Link> |
                <Link to="/menu">Menu</Link> | {/* Assuming you'll create a Menu.jsx */}
                <Link to="/merch">Merchandise</Link> |
                <Link to="/login">Login</Link> {/* Assuming you'll create a Login.jsx */}
                 | <Link to="/cart">Cart</Link> {/* Link to a Cart page if it exists */}
            </nav>

            <section id="navigation">
                <nav>
                    {/* These links are for internal page anchors, not new routes */}
                    <a href="#coffee-products">Coffee Mugs</a> |
                    <a href="#signature-drinks">T-shirts with Coffee Quotes</a> |
                    <a href="#pastries-cookies-cupcakes">Coffee-themed Artwork</a> |
                    <a href="#sandwiches-wraps">Brewing Accessories</a>
                    <a href="#sandwiches-wraps">Shop Merchandise</a>
                </nav>
            </section>

            <section id="coffee-products">
                <h2>Coffee Mugs</h2>
                <div className="product">
                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/PorcelainMug1.jpg'} alt="PorcelainMug" />
                        <h3>Porcelain Mugs with Gold Accents</h3>
                        <p>Luxurious fine porcelain mugs with delicate gold trims for an elegant touch to your coffee experience.</p>
                        <p>₹262.50</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/Marble-Patterned1.jpg'} alt="Marble-Patterned Mugs" />
                        <h3>Marble-Patterned Mugs</h3>
                        <p>Visually striking mugs with a marble pattern that mimics natural stone, adding a touch of refinement to your drink.</p>
                        <p>₹899.00</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/MinimalistCeramic1.jpg'} alt="MinimalistCeramic" />
                        <h3>Minimalist Ceramic Mugs</h3>
                        <p>Sleek and modern ceramic mugs in neutral tones, perfect for a clean and sophisticated aesthetic.</p>
                        <p>₹492.00</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/Hand-Painted2.jpg'} alt="Hand-Painted" />
                        <h3>Hand-Painted Mugs</h3>
                        <p>Unique mugs featuring beautiful hand-painted designs that bring a touch of artistry and personalization to your coffee routine..</p>
                        <p>₹262.50</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/MatteFinish.jpg'} alt="MatteFinish" />
                        <h3>Matte Finish Mugs</h3>
                        <p>Mugs with a rich matte finish in deep colors, providing a soft texture and a bold, contemporary look.</p>
                        <p>₹899.00</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/Double-WalledGlass.jpg'} alt="Double-WalledGlass" />
                        <h3>Double-Walled Glass Mugs</h3>
                        <p>Stylish and functional glass mugs with double-walled insulation, keeping drinks hot while showcasing their beauty.</p>
                        <p>₹492.00</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>
                </div>
            </section>

            <section id="Brewing Accessories">
                <h2>Brewing Accessories</h2>
                <div className="product">
                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/FrenchPress.jpg'} alt="FrenchPress" />
                        <h3>French Press</h3>
                        <p>Elevate your coffee experience with this premium French press, featuring a sleek design and durable materials such as stainless steel or heat-resistant glass for a rich and full-bodied brew.</p>
                        <p>₹399.00</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/PourOver1.jpg'} alt="PourOver" />
                        <h3>Pour-Over Coffee Maker</h3>
                        <p>Enjoy precise and artisanal brewing with this stylish pour-over coffee maker, complete with a ceramic or glass dripper and quality carafe for a clean and flavorful cup of coffee</p>
                        <p>₹472.50</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>

                    <div className="product-item">
                        <img className="product-image" src={process.env.PUBLIC_URL + '/img/Grinder.jpg'} alt="Grinder" />
                        <h3>Coffee Grinder</h3>
                        <p>Achieve the perfect grind consistency with this high-quality coffee grinder, offering adjustable settings and modern design for a tailored brewing experience every time.</p>
                        <p>₹278.25</p>
                        <div className="toggle-buy-btn">Buy</div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Merch;