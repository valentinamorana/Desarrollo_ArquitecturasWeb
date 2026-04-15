import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/design-system.css';
import LandingPage from './pages/LandingPage';
import MemberDashboard from './pages/MemberDashboard';
import InventoryManagement from './pages/InventoryManagement';
import LogisticsHub from './pages/LogisticsHub';
import WebmasterPanel from './pages/WebmasterPanel';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Simple Role Switcher for Prototype */}
        <div style={{
          position: 'fixed', 
          bottom: '1rem', 
          right: '1rem', 
          zIndex: 9999, 
          backgroundColor: 'var(--primary)', 
          padding: '0.5rem', 
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <Link to="/" style={{color: 'white', fontSize: '10px', textDecoration: 'none'}}>Public</Link>
          <Link to="/member" style={{color: 'white', fontSize: '10px', textDecoration: 'none'}}>Member</Link>
          <Link to="/staff/inventory" style={{color: 'white', fontSize: '10px', textDecoration: 'none'}}>Staff</Link>
          <Link to="/staff/logistics" style={{color: 'white', fontSize: '10px', textDecoration: 'none'}}>Logistics</Link>
          <Link to="/admin" style={{color: 'white', fontSize: '10px', textDecoration: 'none'}}>Admin</Link>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/staff/inventory" element={<InventoryManagement />} />
          <Route path="/staff/logistics" element={<LogisticsHub />} />
          <Route path="/admin" element={<WebmasterPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
