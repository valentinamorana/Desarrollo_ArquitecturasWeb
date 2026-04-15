import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: (userType: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [userType, setUserType] = useState('member');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica simple para el prototipo
    if (userType === 'admin' && !id.startsWith('admin_')) {
      alert('Los IDs de empleado deben comenzar con admin_');
      return;
    }
    
    onLogin(userType);
    
    if (userType === 'member') navigate('/member');
    else if (userType === 'admin') navigate('/staff/inventory');
    else if (userType === 'webmaster') navigate('/admin');
  };

  return (
    <div className="login-container">
      <div className="login-card editorial-shadow">
        <div className="login-header">
          <h2 className="brand-logo">WardrobeFlow</h2>
          <p>Acceder al Atelier Digital</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Iniciar sesión como</label>
            <select 
              value={userType} 
              onChange={(e) => setUserType(e.target.value)}
              className="login-select"
            >
              <option value="member">Miembro Privado</option>
              <option value="admin">Empleado (Personal)</option>
              <option value="webmaster">Webmaster del Sistema</option>
            </select>
          </div>

          <div className="input-group">
            <label>{userType === 'admin' ? 'ID de Empleado (comienza con admin_)' : 'Email / ID de Miembro'}</label>
            <input 
              type="text" 
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={userType === 'admin' ? 'admin_001' : 'Correo electrónico'}
              required 
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Ingresar al Archivo
          </button>
        </form>
        
        <div className="login-footer">
          <p>¿No tienes una cuenta? <span>Solicitar Acceso</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
