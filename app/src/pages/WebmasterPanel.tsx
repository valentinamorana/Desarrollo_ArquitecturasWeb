import SideNavBar from '../components/layout/SideNavBar';
import './WebmasterPanel.css';

interface WebmasterPanelProps {
  onLogout?: () => void;
}

const WebmasterPanel = ({ onLogout }: WebmasterPanelProps) => {
  return (
    <div className="portal-layout">
      <SideNavBar onLogout={onLogout} />
      <main className="portal-main admin-main">
        <header className="admin-header glass-nav">
           <div className="header-left">
              <span className="system-status-indicator">Consola del Sistema</span>
              <nav className="header-nav">
                 <a href="#">Resumen</a>
                 <a href="#">Despliegues</a>
                 <a className="active" href="#">Salud</a>
              </nav>
           </div>
           <div className="header-right">
              <div className="admin-search">
                 <span className="material-symbols-outlined">search</span>
                 <input type="text" placeholder="BUSCAR EN EL SISTEMA..." />
              </div>
              <div className="admin-profile">
                 <span className="material-symbols-outlined">notifications</span>
                 <span className="material-symbols-outlined">dark_mode</span>
                 <div className="avatar">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8UjM4PopKrszYQrxDo-I1PxvApGEkW_SQQD63wZGJZ3RXoTfAWu9sQ25jXJIokgzw9CxXs3yrzVkRBlbCNS0UEUkNIztrPN6qAr5HQGBSctI0W1r3xqwiWFvT6qjrnKEUCzv7lzTMsbm6nJYx0eyz64Rb_DNHu8-ZraHqVjkPVmZ7M6vEDCXr9HmmFg3FrPXl0CpjvnkuVc5E30ig1RE6sX-EXHrr_vX-79wgw51eaEcYcgr0i2AWZaxeMm1aAO1UdswL5l1d-moe" alt="Admin" />
                 </div>
              </div>
           </div>
        </header>

        <div className="admin-content">
           <section className="admin-hero">
              <div className="hero-text">
                 <h2 className="display-text">Centro de Control Ejecutivo - <span className="italic font-normal">Configuración y Salud</span></h2>
                 <p className="subtitle">Un entorno de supervisión especializado para la arquitectura central de WardrobeFlow.</p>
              </div>
              <div className="status-badge-card bg-surface-lowest editorial-shadow">
                 <div className="status-top">
                    <div className="pulse-dot"></div>
                    <span className="label">Estado del Sistema</span>
                 </div>
                 <div className="status-value">NOMINAL</div>
              </div>
           </section>

           <div className="bento-grid">
              <div className="bento-card span-8 bg-surface-low">
                 <div className="card-header">
                    <h3><span className="material-symbols-outlined">verified_user</span> Protocolo de Integridad de Base de Datos</h3>
                    <span className="timestamp">Última Sincronización: hace 2m</span>
                 </div>
                 <div className="integrity-metrics">
                    <div className="metric-box bg-surface-lowest">
                       <span className="label">Dígitos de Control Horizontales</span>
                       <div className="metric-value">
                          <span className="hex">0xFE829</span>
                          <span className="verified-label">Validado</span>
                       </div>
                    </div>
                    <div className="metric-box bg-surface-lowest">
                       <span className="label">Dígitos de Control Verticales</span>
                       <div className="metric-value">
                          <span className="hex">0xBC441</span>
                          <span className="verified-label">Verificado</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bento-card span-4 bg-primary text-white">
                 <span className="material-symbols-outlined lg-icon">shield_lock</span>
                 <h3 className="italic">Encriptación Fortaleza Activa</h3>
                 <div className="security-details">
                    <div className="detail-row"><span>Datos en Reposo</span> <strong>AES-128</strong></div>
                    <div className="detail-row"><span>Protocolo SSL</span> <strong>TLS 1.3</strong></div>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default WebmasterPanel;
