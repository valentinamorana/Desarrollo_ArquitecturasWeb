import SideNavBar from '../components/layout/SideNavBar';
import './LogisticsHub.css';

interface LogisticsHubProps {
  onLogout?: () => void;
}

const LogisticsHub = ({ onLogout }: LogisticsHubProps) => {
  return (
    <div className="portal-layout">
      <SideNavBar onLogout={onLogout} />
      <main className="portal-main logistics-main">
        <header className="page-header">
          <div className="header-text">
            <h2 className="display-text">Centro de <span className="italic font-normal">Logística</span></h2>
            <p className="subtitle">Portal de operador para transiciones de prendas y protocolos de garantía de calidad.</p>
          </div>
          <div className="stats-box bg-surface-low">
             <span className="stats-label">Estado de la Cola</span>
             <span className="stats-value">24 Pendientes</span>
          </div>
        </header>

        <div className="kanban-grid">
           {/* Columna de Envíos */}
           <section className="kanban-column">
              <div className="column-header">
                 <h3>
                   <span className="material-symbols-outlined">local_shipping</span>
                   Envíos a Preparar
                 </h3>
                 <span className="count-badge primary">12 PEDIDOS</span>
              </div>
              <div className="card-stack">
                 <div className="kanban-card bg-surface-lowest">
                    <div className="card-top">
                       <span className="order-id">Pedido #WF-8921</span>
                       <span className="priority-badge express">EXPRESS</span>
                    </div>
                    <h4>Elizabeth Vancroft</h4>
                    <div className="item-preview">
                       <div className="preview-img grayscale">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM8z6CTMZAmOtwYN4XnsKYUfIxa_cYhSKmv52E5OJd5vobXcn6dvr5ntxXpfrmXKCQHECYnE1xt7aU_ASQzhIsYUTbX--GhIHVyFP9UE580HRb88W9skXtY4nJsWMzBljz-_TQKV4bunbS5J2xVAL1i1NdJrvCrcXVJV-4-X-tBAjglJ_-avApx1dbz-842KVgJeTxJmVDZp7bY9NgPaCs3nQIyPEBnOY_O2Q8IFihcW7L4xIIvP2Y4egzQMhpFI6uIY6li6phxKRF" alt="Trench" />
                       </div>
                       <div className="item-info">
                          <p className="item-title">Gabardina Atelier</p>
                          <p className="item-meta">Talla: M | Color: Carbón</p>
                          <div className="status-indicator">
                             <span className="dot"></span>
                             <span className="status-label">Limpieza Verificada</span>
                          </div>
                       </div>
                    </div>
                    <div className="card-actions">
                       <input type="text" placeholder="Escanear número de guía..." />
                       <button className="btn-small">IMPRIMIR ETIQUETA</button>
                    </div>
                 </div>
              </div>
           </section>

           {/* Columna de Devoluciones */}
           <section className="kanban-column">
              <div className="column-header">
                 <h3>
                   <span className="material-symbols-outlined">assignment_return</span>
                   Devoluciones a Procesar
                 </h3>
                 <span className="count-badge tertiary">8 PENDIENTES</span>
              </div>
              <div className="card-stack">
                 <div className="kanban-card active-inspection bg-surface-lowest">
                    <div className="card-top">
                       <span className="active-label">Inspección Activa: #R-1022</span>
                       <div className="due-timer">
                          <span className="material-symbols-outlined">history</span>
                          <span>VENCE 2H</span>
                       </div>
                    </div>
                    <h4>Sienna Rossi</h4>
                    <div className="inspection-workspace bg-surface-low">
                       <div className="inspection-grid">
                          <div className="item-photo">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy_50isrVB6_F86ShYmG6Gsh8GQuUAZxyE10ne4GQuA63bjoMvIM9oThpGCPkMPHNfdCBvaAvtblnBUakfSoOc5Xa927AbY10ZMVI_wEPgOagPt5LzivfShV4_O-Mz0OFZj3z8QVcFVGxZAtq-qHtP-UG6MolGov0ZT_oZ6id6h5sdU9rfXtYhPWHwS_02xZWjWqNJgfQRGsICa2QfQnAkmemkDDZUgbbkMlFrMCl7M5OWHcV3NJ--wRUQESC3pdquOVFNUijAOkoF" alt="Skirt" />
                          </div>
                          <div className="item-details">
                             <span className="details-label">Detalles del Artículo</span>
                             <p className="item-name">Falda Midi Plisada</p>
                             <p className="item-id">ID: 4492-IVORY</p>
                             <button className="btn-tertiary">Comprar para Stock</button>
                          </div>
                       </div>
                       <div className="protocol-checklist">
                          <span className="protocol-label">Protocolo de Inspección</span>
                          <label><input type="checkbox" /> Sin daños visibles en la tela</label>
                          <label><input type="checkbox" /> Limpieza: Sin olores ni manchas</label>
                          <textarea placeholder="Notas del operador sobre la condición..."></textarea>
                       </div>
                       <div className="action-buttons">
                          <button className="btn-outline-small">MARCAR PARA REPARACIÓN</button>
                          <button className="btn-primary-small">COMPLETAR DEVOLUCIÓN</button>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>

        <section className="global-stats">
           <div className="stat-card bg-surface-low">
              <span className="stat-label">Tiempo de Ciclo</span>
              <h5 className="stat-value">14.2 <span>horas</span></h5>
              <div className="stat-progress"><div className="fill" style={{width: '75%'}}></div></div>
              <span className="material-symbols-outlined background-icon">timer</span>
           </div>
           <div className="stat-card bg-surface-low">
              <span className="stat-label">Inventario en Tránsito</span>
              <h5 className="stat-value">482 <span>prendas</span></h5>
              <div className="stat-progress"><div className="fill" style={{width: '45%'}}></div></div>
              <span className="material-symbols-outlined background-icon">package_2</span>
           </div>
           <div className="stat-card bg-primary text-white">
              <span className="stat-label text-white-dim">Tasa de Aprobación de Calidad</span>
              <h5 className="stat-value text-white">99.2%</h5>
              <p className="stat-subtext">Referencia: 98.5%</p>
              <span className="material-symbols-outlined background-icon">verified</span>
           </div>
        </section>
      </main>
    </div>
  );
};

export default LogisticsHub;
