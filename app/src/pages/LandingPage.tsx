import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="glass-nav landing-nav">
        <div className="nav-container">
          <div className="nav-left">
            <a href="#" className="brand-logo">WardrobeFlow</a>
            <div className="nav-links">
              <a href="#" className="active">Catalog</a>
              <a href="#">Collections</a>
              <a href="#">The Atelier</a>
              <a href="#">Membership</a>
            </div>
          </div>
          <div className="nav-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search the archive..." />
            </div>
            <div className="nav-icons">
              <button className="material-symbols-outlined">shopping_bag</button>
              <button className="material-symbols-outlined">person</button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="label">The New Era of Consumption</span>
              <h1 className="display-text">
                The <span className="italic font-normal">Rotational</span> Wardrobe.
              </h1>
              <p className="hero-description">
                A continuous stream of high-fashion, delivered to your door. Wear the seasons’s best, swap when you’re ready, and never own a "last-year" piece again.
              </p>
              <div className="button-group">
                <button className="btn btn-primary">Explore Catalog</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="main-image editorial-shadow">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv68wI9tbkq-pvz7-fbQuu4SORMFAZUzUtqtr6v8e0G_QmYvgN7Hol-615tzy4hAXkLQFLbfpHtFg1XNnEolhIPmlgH4wH4S6oOENlc0s74Pg8z8iB2wcHYlVkRiQwNyXz8O4q_44rY7BxFdSXAYBI2laFiY_A95Oh085dX0rfaB14pSd8A0gWLgsUY7Yh63KOrNtYRZwtJZ3hi8DgDijM_wVMCLfNQWBGwecv-RKjmZrIaYe40vfgamKGeqbl0ZCTUUrc06WsE0zj" alt="Fashion Model" />
              </div>
              <div className="floating-card editorial-shadow">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYvRSYUUE6UgOdV8gr5KA48Il7_F7fsM6PcHvkvwE-6gK2MmbCpElP9CsoyRoefYjm3X0VGntymmLGKw_Cb34P_ffPsH4AIalZxeu_54x4rKrxyFP6_Wa63l9-qSxW_g6oniO1Hw5r7QY8hCafwtpEd60lkXycVUVE5mZWsrVAEJs2GXBLShpNN1BrMe-vYPLro8z3169yNpHSRJX2TH4XWiC-InC3w0uK_YJwLWj6fqznfGizTCfGB5NvdZ9XaPUtDvy9mTOPTq7O" alt="Detail" />
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works section-container-low">
          <div className="container">
            <div className="section-header">
              <div className="section-title">
                <h2>A Curated Journey</h2>
                <p>Sustainable luxury isn't about owning less; it's about experiencing more through a mindful rotation.</p>
              </div>
              <div className="title-divider"></div>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <span className="step-number">01</span>
                <h3>Select</h3>
                <p>Browse our seasonal archives of designer pieces. Choose up to five items for your monthly rotation from the world's leading ateliers.</p>
              </div>
              <div className="step-card">
                <span className="step-number">02</span>
                <h3>Wear</h3>
                <p>Enjoy your curated selection for as long as you like. From gala events to everyday elegance, live your life in WardrobeFlow styles.</p>
              </div>
              <div className="step-card">
                <span className="step-number">03</span>
                <h3>Swap</h3>
                <p>Whenever you're ready for something new, return your items in our reusable packaging. Your next selection is already waiting.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="container catalog-layout">
            <aside className="filters-sidebar">
              <div className="filter-group">
                <h4>Category</h4>
                <ul>
                  <li>Dresses <span>42</span></li>
                  <li className="active">Outerwear <span>18</span></li>
                  <li>Sets <span>24</span></li>
                  <li>Accessories <span>12</span></li>
                </ul>
              </div>
              {/* More filters... */}
            </aside>
            <div className="catalog-grid-container">
              <div className="grid-header">
                <span>Showing 18 of 142 Pieces</span>
                <div className="sort-by">Sort By: Featured <span className="material-symbols-outlined">expand_more</span></div>
              </div>
              <div className="product-grid">
                <div className="product-card">
                   <div className="product-image">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsvAlr9uAVHc_P45ki68vGIB6LLBvGq-k_hSAjlkUDYOlu19PzFL8BC0deMTtIDC1yd_sO8Ilbi9qGjXFyCMm3x9eT_Dp5r2TBz4K8iDZdwA4KJhsCpoIFEb7b8YQjmhOBBndYv6PBkO7GRPQ7swYJCaQC8ZBZRPU_jiY54wx6Fr1LF091paklaEdT92r38Do7YyG5heg-LT-iYbfT2nYOH2Sx8yhJ_UAhZW_48qRmuAmNERW-tMJIfKm4ca0SkpvIIdJYURgIdeUi" alt="Product" />
                      <div className="quick-add">Quick Add</div>
                   </div>
                   <div className="product-info">
                      <div>
                        <span className="brand">Saint Laurent Atelier</span>
                        <h5>Sculpted Wool Overcoat</h5>
                      </div>
                      <span className="material-symbols-outlined">favorite</span>
                   </div>
                </div>
                {/* Repeat more product cards... */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="editorial-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">WardrobeFlow</span>
            <p>Elevating the rotation since 2024.</p>
          </div>
          <div className="footer-links">
            <a href="#">Sustainability</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-copyright">
            © 2024 WardrobeFlow Digital Atelier. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
