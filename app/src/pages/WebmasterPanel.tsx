import SideNavBar from '../components/layout/SideNavBar';
import './WebmasterPanel.css';

const WebmasterPanel = () => {
  return (
    <div className="portal-layout">
      <SideNavBar />
      <main className="portal-main admin-main">
        <header className="admin-header glass-nav">
           <div className="header-left">
              <span className="system-status-indicator">System Console</span>
              <nav className="header-nav">
                 <a href="#">Overview</a>
                 <a href="#">Deployments</a>
                 <a className="active" href="#">Health</a>
              </nav>
           </div>
           <div className="header-right">
              <div className="admin-search">
                 <span className="material-symbols-outlined">search</span>
                 <input type="text" placeholder="SEARCH SYSTEM..." />
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
                 <h2 className="display-text">Executive Control Center - <span className="italic font-normal">System Config & Health</span></h2>
                 <p className="subtitle">A specialized oversight environment for WardrobeFlow core architecture.</p>
              </div>
              <div className="status-badge-card bg-surface-lowest editorial-shadow">
                 <div className="status-top">
                    <div className="pulse-dot"></div>
                    <span className="label">System Status</span>
                 </div>
                 <div className="status-value">NOMINAL</div>
              </div>
           </section>

           <div className="bento-grid">
              <div className="bento-card span-8 bg-surface-low">
                 <div className="card-header">
                    <h3><span className="material-symbols-outlined">verified_user</span> Database Integrity Protocol</h3>
                    <span className="timestamp">Last Sync: 2m ago</span>
                 </div>
                 <div className="integrity-metrics">
                    <div className="metric-box bg-surface-lowest">
                       <span className="label">Horizontal Check Digits</span>
                       <div className="metric-value">
                          <span className="hex">0xFE829</span>
                          <span className="verified-label">Validated</span>
                       </div>
                    </div>
                    <div className="metric-box bg-surface-lowest">
                       <span className="label">Vertical Check Digits</span>
                       <div className="metric-value">
                          <span className="hex">0xBC441</span>
                          <span className="verified-label">Verified</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bento-card span-4 bg-primary text-white">
                 <span className="material-symbols-outlined lg-icon">shield_lock</span>
                 <h3 className="italic">Fortress Encryption Active</h3>
                 <div className="security-details">
                    <div className="detail-row"><span>Data-at-Rest</span> <strong>AES-128</strong></div>
                    <div className="detail-row"><span>SSL Protocol</span> <strong>TLS 1.3</strong></div>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default WebmasterPanel;
