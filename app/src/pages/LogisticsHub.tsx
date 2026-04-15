import SideNavBar from '../components/layout/SideNavBar';
import './LogisticsHub.css';

const LogisticsHub = () => {
  return (
    <div className="portal-layout">
      <SideNavBar />
      <main className="portal-main logistics-main">
        <header className="page-header">
          <div className="header-text">
            <h2 className="display-text">Logistics <span className="italic font-normal">Hub</span></h2>
            <p className="subtitle">Operator portal for seamless garment transitions and quality assurance protocols.</p>
          </div>
          <div className="stats-box bg-surface-low">
             <span className="stats-label">Queue Status</span>
             <span className="stats-value">24 Pending</span>
          </div>
        </header>

        <div className="kanban-grid">
           {/* Shipments Column */}
           <section className="kanban-column">
              <div className="column-header">
                 <h3>
                   <span className="material-symbols-outlined">local_shipping</span>
                   Shipments to Prepare
                 </h3>
                 <span className="count-badge primary">12 ORDERS</span>
              </div>
              <div className="card-stack">
                 <div className="kanban-card bg-surface-lowest">
                    <div className="card-top">
                       <span className="order-id">Order #WF-8921</span>
                       <span className="priority-badge express">EXPRESS</span>
                    </div>
                    <h4>Elizabeth Vancroft</h4>
                    <div className="item-preview">
                       <div className="preview-img grayscale">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM8z6CTMZAmOtwYN4XnsKYUfIxa_cYhSKmv52E5OJd5vobXcn6dvr5ntxXpfrmXKCQHECYnE1xt7aU_ASQzhIsYUTbX--GhIHVyFP9UE580HRb88W9skXtY4nJsWMzBljz-_TQKV4bunbS5J2xVAL1i1NdJrvCrcXVJV-4-X-tBAjglJ_-avApx1dbz-842KVgJeTxJmVDZp7bY9NgPaCs3nQIyPEBnOY_O2Q8IFihcW7L4xIIvP2Y4egzQMhpFI6uIY6li6phxKRF" alt="Trench" />
                       </div>
                       <div className="item-info">
                          <p className="item-title">Atelier Trench Coat</p>
                          <p className="item-meta">Size: M | Color: Charcoal</p>
                          <div className="status-indicator">
                             <span className="dot"></span>
                             <span className="status-label">Cleaning Verified</span>
                          </div>
                       </div>
                    </div>
                    <div className="card-actions">
                       <input type="text" placeholder="Scan tracking number..." />
                       <button className="btn-small">PRINT LABEL</button>
                    </div>
                 </div>
              </div>
           </section>

           {/* Returns Column */}
           <section className="kanban-column">
              <div className="column-header">
                 <h3>
                   <span className="material-symbols-outlined">assignment_return</span>
                   Returns to Process
                 </h3>
                 <span className="count-badge tertiary">8 PENDING</span>
              </div>
              <div className="card-stack">
                 <div className="kanban-card active-inspection bg-surface-lowest">
                    <div className="card-top">
                       <span className="active-label">Active Inspection: #R-1022</span>
                       <div className="due-timer">
                          <span className="material-symbols-outlined">history</span>
                          <span>DUE 2H</span>
                       </div>
                    </div>
                    <h4>Sienna Rossi</h4>
                    <div className="inspection-workspace bg-surface-low">
                       <div className="inspection-grid">
                          <div className="item-photo">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy_50isrVB6_F86ShYmG6Gsh8GQuUAZxyE10ne4GQuA63bjoMvIM9oThpGCPkMPHNfdCBvaAvtblnBUakfSoOc5Xa927AbY10ZMVI_wEPgOagPt5LzivfShV4_O-Mz0OFZj3z8QVcFVGxZAtq-qHtP-UG6MolGov0ZT_oZ6id6h5sdU9rfXtYhPWHwS_02xZWjWqNJgfQRGsICa2QfQnAkmemkDDZUgbbkMlFrMCl7M5OWHcV3NJ--wRUQESC3pdquOVFNUijAOkoF" alt="Skirt" />
                          </div>
                          <div className="item-details">
                             <span className="details-label">Item Details</span>
                             <p className="item-name">Pleated Midi Skirt</p>
                             <p className="item-id">ID: 4492-IVORY</p>
                             <button className="btn-tertiary">Purchase to Stock</button>
                          </div>
                       </div>
                       <div className="protocol-checklist">
                          <span className="protocol-label">Inspection Protocol</span>
                          <label><input type="checkbox" /> No visible fabric damage</label>
                          <label><input type="checkbox" /> Cleanliness: No scent or stains</label>
                          <textarea placeholder="Operator notes on condition..."></textarea>
                       </div>
                       <div className="action-buttons">
                          <button className="btn-outline-small">FLAG FOR REPAIR</button>
                          <button className="btn-primary-small">COMPLETE RETURN</button>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>

        <section className="global-stats">
           <div className="stat-card bg-surface-low">
              <span className="stat-label">Cycle Time</span>
              <h5 className="stat-value">14.2 <span>hours</span></h5>
              <div className="stat-progress"><div className="fill" style={{width: '75%'}}></div></div>
              <span className="material-symbols-outlined background-icon">timer</span>
           </div>
           <div className="stat-card bg-surface-low">
              <span className="stat-label">Transit Inventory</span>
              <h5 className="stat-value">482 <span>items</span></h5>
              <div className="stat-progress"><div className="fill" style={{width: '45%'}}></div></div>
              <span className="material-symbols-outlined background-icon">package_2</span>
           </div>
           <div className="stat-card bg-primary text-white">
              <span className="stat-label text-white-dim">Quality Pass Rate</span>
              <h5 className="stat-value text-white">99.2%</h5>
              <p className="stat-subtext">Benchmark: 98.5%</p>
              <span className="material-symbols-outlined background-icon">verified</span>
           </div>
        </section>
      </main>
    </div>
  );
};

export default LogisticsHub;
