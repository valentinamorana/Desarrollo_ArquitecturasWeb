import { Link } from 'react-router-dom';
import './LandingPage.css';

interface LandingPageProps {
  userType: string | null;
  onLogout: () => void;
}

const LandingPage = ({ userType, onLogout }: LandingPageProps) => {
  return (
    <div className="landing-page">
      <nav className="glass-nav landing-nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="brand-logo">WardrobeFlow</Link>
            <div className="nav-links">
              <Link to={userType ? "/member" : "/login"} className="active">Catálogo</Link>
              <a href="#">Colecciones</a>
              <a href="#">El Atelier</a>
              <a href="#">Membresía</a>
            </div>
          </div>
          <div className="nav-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Buscar en el archivo..." />
            </div>
            <div className="nav-icons">
              <button className="material-symbols-outlined">shopping_bag</button>
              {userType ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Link to="/member" className="material-symbols-outlined" style={{ textDecoration: 'none', color: 'inherit' }}>person</Link>
                  <button onClick={onLogout} className="btn-logout-small">SALIR</button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-outline-small" style={{ textDecoration: 'none' }}>INGRESAR</Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="label">La Nueva Era del Consumo</span>
              <h1 className="display-text">
                Wardrobe<span className="italic font-normal">Flow</span>.
              </h1>
              <p className="hero-description">
                Un flujo continuo de alta moda, entregado en tu puerta. Viste lo mejor de la temporada, cámbialo cuando estés lista y nunca vuelvas a poseer una pieza de la "temporada pasada".
              </p>
              <div className="button-group">
                <Link to="/member" className="btn btn-primary" style={{ textDecoration: 'none' }}>Explorar Catálogo</Link>
                <button className="btn btn-outline">Saber Más</button>
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
                <h2>Un Viaje Curado</h2>
                <p>El lujo sostenible no se trata de poseer menos; se trata de experimentar más a través de una rotación consciente.</p>
              </div>
              <div className="title-divider"></div>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <span className="step-number">01</span>
                <h3>Selecciona</h3>
                <p>Navega por nuestros archivos estacionales de piezas de diseñador. Elige hasta cinco artículos para tu rotación mensual de los mejores talleres del mundo.</p>
              </div>
              <div className="step-card">
                <span className="step-number">02</span>
                <h3>Viste</h3>
                <p>Disfruta de tu selección curada durante el tiempo que desees. Desde eventos de gala hasta la elegancia cotidiana, vive tu vida con los estilos de WardrobeFlow.</p>
              </div>
              <div className="step-card">
                <span className="step-number">03</span>
                <h3>Intercambia</h3>
                <p>Cuando estés lista para algo nuevo, devuelve tus artículos en nuestro embalaje reutilizable. Tu próxima selección ya te está esperando.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="container catalog-layout">
            <aside className="filters-sidebar">
              <div className="filter-group">
                <h4>Categoría</h4>
                <ul>
                  <li>Vestidos <span>42</span></li>
                  <li className="active">Abrigos <span>18</span></li>
                  <li>Conjuntos <span>24</span></li>
                  <li>Accesorios <span>12</span></li>
                </ul>
              </div>
            </aside>
            <div className="catalog-grid-container">
              <div className="grid-header">
                <span>Mostrando 18 de 142 Piezas</span>
                <div className="sort-by">Ordenar por: Destacados <span className="material-symbols-outlined">expand_more</span></div>
              </div>
              <div className="product-grid">
                <div className="product-card">
                   <div className="product-image">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsvAlr9uAVHc_P45ki68vGIB6LLBvGq-k_hSAjlkUDYOlu19PzFL8BC0deMTtIDC1yd_sO8Ilbi9qGjXFyCMm3x9eT_Dp5r2TBz4K8iDZdwA4KJhsCpoIFEb7b8YQjmhOBBndYv6PBkO7GRPQ7swYJCaQC8ZBZRPU_jiY54wx6Fr1LF091paklaEdT92r38Do7YyG5heg-LT-iYbfT2nYOH2Sx8yhJ_UAhZW_48qRmuAmNERW-tMJIfKm4ca0SkpvIIdJYURgIdeUi" alt="Product" />
                      <div className="quick-add">Añadir Rápido</div>
                   </div>
                   <div className="product-info">
                      <div>
                        <span className="brand">Saint Laurent Atelier</span>
                        <h5>Abrigo de Lana Esculpido</h5>
                      </div>
                      <span className="material-symbols-outlined">favorite</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="editorial-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">WardrobeFlow</span>
            <p>Elevando la rotación desde 2024.</p>
          </div>
          <div className="footer-links">
            <Link to="/admin">Panel Admin</Link>
            <Link to="/staff/inventory">Inventario</Link>
            <Link to="/staff/logistics">Logística</Link>
            <a href="#">Sostenibilidad</a>
            <a href="#">Contacto</a>
          </div>
          <div className="footer-copyright">
            © 2024 WardrobeFlow Digital Atelier. Todos los Derechos Reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
