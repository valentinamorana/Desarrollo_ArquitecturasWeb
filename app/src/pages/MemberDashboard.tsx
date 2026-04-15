import SideNavBar from '../components/layout/SideNavBar';
import './MemberDashboard.css';

const MemberDashboard = () => {
  return (
    <div className="member-layout">
      <SideNavBar />
      <main className="member-main">
        <header className="page-header">
          <div className="header-text">
            <span className="label">Curation Hub</span>
            <h2 className="display-text">My Current Wardrobe</h2>
          </div>
          <button className="btn btn-primary">Request an Exchange</button>
        </header>

        <div className="dashboard-grid">
          <div className="wardrobe-gallery">
            <div className="gallery-grid">
              {/* Item 1 */}
              <div className="wardrobe-card editorial-shadow">
                <div className="card-image">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Hnuvq-0KZf_Z3qSwJ18QxgDMNOnGTxAMjxwUNByEvojWUaaKgGoTg1fqdKMOMKFEfKzwPK_FDzlTat6WHzsJPDmRoOt4wMMSxaf7b3Grtg0kXHRCcHzBoda8nDe6p7M3zoGyq1D8FZRQn0wLUBfEw1P5aubF60B_kDBQJeVZZobHY8lhTD3yWYhxyA7zRm-kyf9pNEDZpcQFrVkVEc0gYFlAXhSHDGrTCmDUSVaLnXzOBtLppm2fktH51Q7kfBGmsO45GMX5Vhv6" alt="Trench Coat" />
                  <div className="status-badge">12 days left</div>
                </div>
                <div className="card-info">
                  <div className="item-details">
                    <h3>Structure Trench</h3>
                    <p className="item-series">L'Atelier Series</p>
                  </div>
                  <div className="item-pricing">
                    <span className="price">$420.00</span>
                    <button className="buyout-link">Buy Out</button>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="wardrobe-card editorial-shadow">
                <div className="card-image">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogr44G0ssNHTf13ZWSgxbUmK2VvkNx6Upho7ZhUCuqgm-D0DXeh0xvWqYo8cb_k903NkULA2_S6pJQn4kAjfLt4Rc3QhRCHjd3CcvKKPDCFIMICD4wXNv3GJ0FOtyxQD3GLyNaZUdjn4LRAUv84C1HELnitc06m5R_g6YSOmvApbuTzXcRVMhq2mzsm4nmjphn-orVU0lPZUMqBW92D0jVBoLULPuZlZgFT8yg7SRBoOXPcsVGx3ql63e-c65mEH5HkvuwBMYEXE4" alt="Knit" />
                  <div className="status-badge">12 days left</div>
                </div>
                <div className="card-info">
                  <div className="item-details">
                    <h3>Obsidian Knit</h3>
                    <p className="item-series">Winter Capsule</p>
                  </div>
                  <div className="item-pricing">
                    <span className="price">$185.00</span>
                    <button className="buyout-link">Buy Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="dashboard-sidebar">
            <section className="subscription-card bg-primary">
              <div className="sub-header">
                <div>
                  <span className="sub-label">Active Plan</span>
                  <h3 className="sub-title italic">Elite Atelier</h3>
                </div>
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div className="sub-progress">
                <div className="progress-text">
                  <span>Monthly Rotation</span>
                  <span>65% Complete</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="sub-dates">
                <div className="date-item">
                  <span className="date-label">Billing Date</span>
                  <span className="date-value">DEC 24, 2024</span>
                </div>
                <div className="date-item">
                  <span className="date-label">Next Shipment</span>
                  <span className="date-value">EST. DEC 12</span>
                </div>
              </div>
            </section>

            <section className="concierge-actions bg-surface-low">
              <h4>Concierge Actions</h4>
              <div className="actions-list">
                <button className="action-btn">
                  <span>Schedule Pick-up</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="action-btn">
                  <span>Styling Consultation</span>
                  <span className="material-symbols-outlined">calendar_today</span>
                </button>
              </div>
            </section>
          </aside>
        </div>

        <footer className="portal-footer">
          <div className="footer-content">
            <span className="brand">WardrobeFlow</span>
            <div className="footer-links">
              <a href="#">Sustainability Manifesto</a>
              <a href="#">The Process</a>
              <a href="#">Care Guide</a>
            </div>
            <p className="copyright">© 2024 WardrobeFlow Digital Atelier</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MemberDashboard;
