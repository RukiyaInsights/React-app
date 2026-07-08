import { useState ,useEffect} from "react";
type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  images: string[];
};
const products = [
  {
    id: 1,
    name: "ABC Rose Bloom",
    category: "Perfume",
    price: "$50",
    description:
      "A luxurious floral perfume with soft rose, vanilla and musk notes.",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
      "https://images.unsplash.com/photo-1629198735660-e39ea93f23e5",
    ],
  },
  {
    id: 2,
    name: "ABC Midnight",
    category: "Perfume",
    price: "$68",
    description:
      "A bold evening fragrance with amber, oud and warm spices.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
    ],
  },
  {
    id: 3,
    name: "ABC Glow Touch",
    category: "Cosmetics",
    price: "$35",
    description:
      "Luxury makeup collection designed for a natural glowing finish.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      "https://images.unsplash.com/photo-1612810436541-336d7c0a0c40",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227",
    ],
  },
  {
    id: 4,
    name: "ABC Velvet Bag",
    category: "Bags",
    price: "$80",
    description:
      "Elegant designer handbag made for everyday luxury.",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    ],
  },
  {
    id: 5,
    name: "ABC Diamond Necklace",
    category: "Jewellery",
    price: "$130",
    description:
      "Luxury necklace crafted to complete every elegant outfit.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    ],
  },
  {
    id: 6,
    name: "ABC Gold Ring",
    category: "Jewellery",
    price: "$95",
    description:
      "Minimal luxury ring with timeless elegance.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    ],
  },
  {
    id: 7,
    name: "ABC Matte Lipstick",
    category: "Cosmetics",
    price: "$28",
    description:
      "Long-lasting premium lipstick available in elegant shades.",
    images: [
      "https://images.unsplash.com/photo-1599305090598-fe179d501227",
      "https://images.unsplash.com/photo-1612810436541-336d7c0a0c40",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    ],
  },
  {
    id: 8,
    name: "ABC Leather Handbag",
    category: "Bags",
    price: "$110",
    description:
      "Premium leather handbag designed for luxury fashion lovers.",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
    ],
  },
];
const reviews = [
  {
    name: "Sophia",
    stars: "★★★★★",
    review:
      "The quality exceeded my expectations. The perfume lasts all day and the packaging is beautiful.",
  },
  {
    name: "Helen",
    stars: "★★★★★",
    review:
      "Everything looks luxurious. I will definitely order again.",
  },
  {
    name: "Huda",
    stars: "★★★★★",
    review:
      "The handbags and jewellery are simply gorgeous. Highly recommended.",
  },
];
const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes. We provide worldwide shipping.",
  },
  {
    question: "Can I return products?",
    answer: "Yes. Returns are accepted within 30 days.",
  },
  {
    question: "How long does delivery take?",
    answer: "Usually between 3 and 7 business days.",
  },
  {
    question: "Are your products authentic?",
    answer: "Yes. Every product is carefully selected for premium quality.",
  },
];
export default function App() {
  const [page, setPage] = useState("home");
  const [searchInput, setSearchInput] = useState("");
  const [, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 5500);
}, []);
  const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});
useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 400) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
const [contactMsg, setContactMsg] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [cart, setCart] = useState<Product[]>([]);
  const categories = [
    "All",
    "Perfume",
    "Cosmetics",
    "Bags",
    "Jewellery",
  ];
  function handleSearch() {
    setSearchTerm(searchInput);
  }
function handleSubscribe() {
  const email = newsletterEmail.trim();
  if (!email.includes("@") || !email.includes(".")) {
    setSubscribeMessage("❌ Enter a valid email");
    return;
  }
  setSubscribeMessage("✅ Subscribed successfully!");
  setNewsletterEmail("");
  setTimeout(() => setSubscribeMessage(""), 3000);
}
  function openProduct(product: Product) {
  setSelectedProduct(product);
  setActiveImage(0);
  setQuantity(1);
}
function addToCart(product: Product) {
  setCart([...cart, product]);
}
function handleContactSubmit() {
  if (!contactForm.name || !contactForm.email || !contactForm.message) {
    setContactMsg("❌ Please fill all fields");
    return;
  }
  setContactMsg("✅ Message sent successfully!");
  setContactForm({ name: "", email: "", message: "" });
  setTimeout(() => setContactMsg(""), 3000);
}
  function closeProduct() {
    setSelectedProduct(null);
    setActiveImage(0);
  }
  const filteredProducts = products.filter((item) => {
    const matchSearch =
  item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  item.category.toLowerCase().includes(searchInput.toLowerCase());
    const matchCategory =
      categoryFilter === "All" ||
      item.category === categoryFilter;
    return matchSearch && matchCategory;
  });
if (loading) {
  return (
    <div className="loader">
  <h1>
    {"ABC Beauty Hub".split("").map((letter, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
       {letter === " " ? "\u00A0" : letter}
      </span>
    ))}
  </h1>
  <p>Luxury • Beauty • Elegance</p>
</div>
  );
}
  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">
          ABC Beauty Hub
        </h2>
        <ul className="nav-links">
          <li onClick={() => setPage("home")}>
            Home
          </li>
          <li onClick={() => setPage("shop")}>
            Shop
          </li>
          <li onClick={() => setPage("about")}>
            About
          </li>
          <li onClick={() => setPage("contact")}>
            Contact
          </li>
<li>
  Cart ({cart.length})
</li>
        </ul>
      </nav>
      {page === "home" && (
        <>
          <section className="hero">
            <img
              src="/images/picture1.png"
              alt="ABC Banner"
              className="hero-image"
            />
            <div className="hero-overlay">
              <h1>ABC Beauty Hub</h1>
              <p>
                Luxury Perfumes • Cosmetics • Bags • Jewellery
              </p>
              <button
                className="hero-btn"
                onClick={() => setPage("shop")}
              >
                Shop Collection
              </button>
            </div>
          </section>
          <section className="welcome">
            <h2>
              Welcome to ABC Beauty Hub
            </h2>
            <p>
              Discover premium beauty collections inspired by elegance,
              confidence, and luxury.

              From exclusive perfumes and premium cosmetics to fashionable
              handbags and timeless jewellery,

              ABC Beauty Hub brings everything together in one luxurious
              shopping destination.
            </p>
          </section>
          <section className="categories">
            <h2>
              Shop By Category
            </h2>
            <div className="category-grid">
              {categories
                .filter((c) => c !== "All")
                .map((category) => (
                  <div
                    key={category}
                    className="card"
                    onClick={() => {
                      setCategoryFilter(category)
                      setPage("shop")
                    }}
                  >
                    {category}
                  </div>
                ))}
            </div>
          </section>
          <section className="featured">
            <h2>
              Featured Collection
            </h2>
            <div className="product-grid">
              {products.slice(0, 4).map((item) => (
                <div
                  className="product-card"
                  key={item.id}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                  />
                  <h3>
                    {item.name}
                  </h3>
                  <p>
                    {item.category}
                  </p>
                  <h4>
                    {item.price}
                  </h4>
                  <button
                    onClick={() => openProduct(item)}
                  >
                    View Product
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className="why-us">
            <h2>
              Why Choose ABC?
            </h2>
            <div className="why-grid">
              <div className="why-card">
                <h3>
                  ✨ Luxury Quality
                </h3>
                <p>
                  Premium products carefully selected for elegance and quality.
                </p>
              </div>
              <div className="why-card">
                <h3>
                  🚚 Fast Delivery
                </h3>
                <p>
                  Safe worldwide shipping with secure packaging.
                </p>
              </div>
              <div className="why-card">
                <h3>
                  💖 Trusted Brand
                </h3>
                <p>
                  Thousands of happy customers trust our collections.
                </p>
              </div>
            </div>
          </section>
          <section className="reviews">
            <h2>
              Customer Reviews
            </h2>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <div
                  className="review-card"
                  key={index}
                >
                  <h3>
                    {review.name}
                  </h3>
                  <h4>
                    {review.stars}
                  </h4>
                  <p>
                    {review.review}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="faq">
            <h2>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <div
                className="faq-card"
                key={index}
              >
                <div
                  className="faq-question"
                  onClick={() =>
                    setFaqOpen(
                      faqOpen === index ? null : index
                    )
                  }
                >
                  <h3>
                    {faq.question}
                  </h3>
                  <span>
                    {faqOpen === index ? "−" : "+"}
                  </span>
                </div>
                {faqOpen === index && (
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </section>
          <section className="newsletter">
            <h2>
              Join Our Newsletter
            </h2>
            <p>
              Receive exclusive offers and luxury beauty updates.
            </p>
            <div className="newsletter-box">
              <input
  type="email"
  placeholder="Enter your email"
  value={newsletterEmail}
  onChange={(e) => setNewsletterEmail(e.target.value)}
/>
<button onClick={handleSubscribe}>
  Subscribe
</button>
{subscribeMessage && (
  <p>{subscribeMessage}</p>
)}
            </div>
          </section>
<footer className="footer">
  <p>© 2026 ABC Beauty Hub. All Rights Reserved.</p>
</footer>
        </>
      )}
      {page === "shop" && (
        <>
          <section className="shop-header">
            <h1>Luxury Collection</h1>
            <p>
              Explore our carefully selected beauty and fashion collections.
            </p>
          </section>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={handleSearch}
            >
              Search
            </button>
<button
  className="clear-btn"
  onClick={() => setSearchInput("")}
>
  Clear
</button>
          </div>
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  categoryFilter === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <section className="products">
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    className="product-card"
                    key={item.id}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                    />
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <h4>{item.price}</h4>
                    <button
                      className="view-btn"
                      onClick={() => openProduct(item)}
                    >
                      View Product
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <h2>
                    No products found.
                  </h2>
                  <p>
                    Try another search or category.
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
      {selectedProduct && (
        <div
          className="modal"
          onClick={closeProduct}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeProduct}
            >
              ✕
            </button>
            <div className="image-viewer">
              <button
                className="nav-btn"
                onClick={() =>
                  setActiveImage(
                    activeImage === 0
                      ? selectedProduct.images.length - 1
                      : activeImage - 1
                  )
                }
              >
                ❮
              </button>
              <img
                src={selectedProduct.images[activeImage]}
                alt={selectedProduct.name}
              />
              <button
                className="nav-btn"
                onClick={() =>
                  setActiveImage(
                    activeImage === selectedProduct.images.length - 1
                      ? 0
                      : activeImage + 1
                  )
                }
              >
                ❯
              </button>
            </div>
            <div className="thumbnail-row">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={
                    activeImage === index
                      ? "thumbnail active-thumb"
                      : "thumbnail"
                  }
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
            <h2>
              {selectedProduct.name}
            </h2>
            <p className="product-category">
              {selectedProduct.category}
            </p>
            <p className="product-description">
              {selectedProduct.description}
            </p>
          <h3>{selectedProduct.price} × {quantity}</h3>
            <div className="quantity-box">
  <button
    onClick={() => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }}
  >
    -
  </button>
  <span>{quantity}</span>
  <button
    onClick={() => setQuantity(quantity + 1)}
  >
    +
  </button>
</div>
            <div className="product-actions">
              <button className="cart-btn" onClick={() => addToCart(selectedProduct)}>
  Add to Cart
</button>
              <button className="buy-btn">
                Buy Now
              </button>
              <button className="wish-btn">
                ❤ Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
      {page === "about" && (
        <section className="about-page">
          <div className="page-title">
            <h1>About ABC Beauty Hub</h1>
            <p>
              Luxury. Elegance. Confidence.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              ABC Beauty Hub is a luxury-inspired beauty and fashion brand
              created to bring together premium perfumes, cosmetics,
              handbags and jewellery in one elegant destination.

              Our goal is to make every customer feel confident,
              beautiful and unique through carefully selected
              high-quality collections.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <h3>🌸 Our Mission</h3>
              <p>
                To provide premium beauty and fashion products
                with outstanding customer experience.
              </p>
            </div>
            <div className="about-card">
              <h3>💎 Our Vision</h3>
              <p>
                To become one of the world's most trusted
                luxury beauty destinations.
              </p>
            </div>
            <div className="about-card">
              <h3>❤️ Our Values</h3>
              <p>
                Quality, Elegance,
                Trust,
                Innovation,
                Customer Satisfaction.
              </p>
            </div>
          </div>
          <div className="statistics">
            <div className="stat-box">
              <h1>15K+</h1>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h1>250+</h1>
              <p>Luxury Products</p>
            </div>
            <div className="stat-box">
              <h1>40+</h1>
              <p>Countries Served</p>
            </div>
            <div className="stat-box">
              <h1>99%</h1>
              <p>Customer Satisfaction</p>
            </div>
          </div>
          <div className="about-bottom">
            <h2>
              Why Customers Love ABC
            </h2>
            <p>
              Every collection is carefully selected with luxury,
              beauty and timeless fashion in mind.

              From premium perfumes to elegant jewellery,
              we focus on providing products that inspire confidence
              and celebrate personal style.
            </p>
          </div>
        </section>
      )}
{page === "contact" && (
  <section className="contact-page">
    <div className="page-title">
      <h1>Contact ABC Beauty Hub</h1>
      <p>We’re always here to help you ✨</p>
    </div>
    <div className="contact-grid">
      <div className="contact-card">
        📍 <h3>Address</h3>
        <p>ABC Beauty Hub HQ, Elegance Street, ABC City</p>
      </div>
      <div className="contact-card">
        📞 <h3>Phone</h3>
        <p>+000 123 456 789</p>
      </div>
      <div className="contact-card">
        📧 <h3>Email</h3>
        <p>support@abcbeautyhub.com</p>
      </div>
      <div className="contact-card">
        🌐 <h3>Website</h3>
        <p>www.abcbeautyhub.com</p>
      </div>
    </div>
    <h2 className="section-title">Follow Us</h2>
    <div className="social-grid">
      <div className="social-card">📸 Instagram: @abcbeautyhub</div>
      <div className="social-card">💼 LinkedIn: ABC Beauty Hub</div>
      <div className="social-card">💻 GitHub: abc-beauty-hub</div>
      <div className="social-card">✈ Telegram: @abcbeautyhub</div>
      <div className="social-card">🐦 X: @abcbeautyhub</div>
    </div>
    <h2 className="section-title">Send Us a Message</h2>
    <div className="contact-form">
      <input
  type="text"
  placeholder="Your Name"
  value={contactForm.name}
  onChange={(e) =>
    setContactForm({ ...contactForm, name: e.target.value })
  }
/>
<input
  type="email"
  placeholder="Your Email"
  value={contactForm.email}
  onChange={(e) =>
    setContactForm({ ...contactForm, email: e.target.value })
  }
/>
<textarea
  placeholder="Your Message"
  value={contactForm.message}
  onChange={(e) =>
    setContactForm({ ...contactForm, message: e.target.value })
  }
/>
<button onClick={handleContactSubmit}>
  Send Message
</button>
{contactMsg && <p>{contactMsg}</p>}
    </div>
    <div className="map-box">
      <p>📍 Map will be embedded here (Google Maps iframe)</p>
    </div>
  </section>
)}
{showTop && (
  <button
    className="top-btn"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    ↑
  </button>
)}
<button
  className="bottom-btn"
  onClick={() =>
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
>
  ↓
</button>
</div>
  );
}