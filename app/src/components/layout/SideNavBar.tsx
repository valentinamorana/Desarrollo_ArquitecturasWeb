import { NavLink } from 'react-router-dom';
import './SideNavBar.css';

interface SideNavBarProps {
  onLogout?: () => void;
}

const SideNavBar = ({ onLogout }: SideNavBarProps) => {
  return (
    <aside className="side-nav">
      <div className="nav-header">
        <h1 className="brand-title">The Atelier</h1>
        <div className="user-profile">
          <div className="profile-img">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRfUH-AWkFyH0M_2hpnTszQFFtenLCbf81JFkrSQGr5G1-rKky9or-JVn05CM4n_eZG-lH9wE1iE6SLog0DrTvxz-eW7IEw368VNoZ7HOO4z--2rxMsOQiJPHVKS8oTG0wbAl2wfDCiW9k7Wagh0SZAXUN9gVDFRygSVJp4J2J3k9oWY64TI_p8P1uLiT7jc7HhFpKLNKXYFqGlf-cuXTfejL8UhhAp7zjTpOMiodj9OVw-m_SBI6YMxJza-yktY32Er755hkQY3rf" alt="Profile" />
          </div>
          <div className="profile-info">
            <span className="user-tier">Miembro Élite</span>
            <span className="user-name">Julian V.</span>
          </div>
        </div>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/member" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="material-symbols-outlined">dashboard</span>
          <span>Resumen</span>
        </NavLink>
        <NavLink to="/staff/inventory" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="material-symbols-outlined">checkroom</span>
          <span>Inventario</span>
        </NavLink>
        <NavLink to="/staff/logistics" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="material-symbols-outlined">local_shipping</span>
          <span>Logística</span>
        </NavLink>
        <NavLink to="/admin" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <span className="material-symbols-outlined">settings</span>
          <span>Admin</span>
        </NavLink>
      </nav>

      <div className="nav-footer">
        <button className="logout-btn" onClick={onLogout}>
          <span className="material-symbols-outlined">logout</span>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};

export default SideNavBar;
