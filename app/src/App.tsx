import { useState, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/design-system.css';
import LandingPage from './pages/LandingPage';
import MemberDashboard from './pages/MemberDashboard';
import InventoryManagement from './pages/InventoryManagement';
import LogisticsHub from './pages/LogisticsHub';
import WebmasterPanel from './pages/WebmasterPanel';
import LoginPage from './pages/LoginPage';

// Simple wrapper to protect routes based on user type
const ProtectedRoute = ({ 
  children, 
  userType, 
  allowedTypes 
}: { 
  children: ReactNode, 
  userType: string | null, 
  allowedTypes: string[] 
}) => {
  if (!userType) return <Navigate to="/login" replace />;
  if (!allowedTypes.includes(userType)) return <Navigate to="/" replace />;
  return <>{children}</>;
};

function App() {
  const [userType, setUserType] = useState<string | null>(null);

  const handleLogin = (type: string) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType(null);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Botón de Cerrar Sesión (solo visible cuando se ha iniciado sesión) */}
        {userType && (
          <button 
            onClick={handleLogout}
            style={{
              position: 'fixed', 
              top: '1rem', 
              right: '1rem', 
              zIndex: 9999, 
              backgroundColor: 'rgba(0,0,0,0.05)', 
              padding: '0.4rem 0.8rem', 
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              fontSize: '10px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Cerrar Sesión ({userType === 'member' ? 'Miembro' : userType === 'admin' ? 'Empleado' : 'Webmaster'})
          </button>
        )}

        <Routes>
          <Route path="/" element={<LandingPage userType={userType} onLogout={handleLogout} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          
          <Route 
            path="/member" 
            element={
              <ProtectedRoute userType={userType} allowedTypes={['member', 'admin', 'webmaster']}>
                <MemberDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/staff/inventory" 
            element={
              <ProtectedRoute userType={userType} allowedTypes={['admin', 'webmaster']}>
                <InventoryManagement onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/staff/logistics" 
            element={
              <ProtectedRoute userType={userType} allowedTypes={['admin', 'webmaster']}>
                <LogisticsHub onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute userType={userType} allowedTypes={['webmaster']}>
                <WebmasterPanel onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
