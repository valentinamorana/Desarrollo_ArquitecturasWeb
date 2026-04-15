import SideNavBar from '../components/layout/SideNavBar';
import './InventoryManagement.css';

interface InventoryManagementProps {
  onLogout?: () => void;
}

const InventoryManagement = ({ onLogout }: InventoryManagementProps) => {
  return (
    <div className="portal-layout">
      <SideNavBar onLogout={onLogout} />
      <main className="portal-main">
        <header className="page-header">
          <div className="header-text">
            <h2 className="display-text">Libro de Inventario</h2>
            <p className="subtitle">Gestión integral de la colección compartida del Atelier.</p>
          </div>
          <button className="btn btn-primary">
            <span className="material-symbols-outlined">add</span>
            Nuevo Artículo
          </button>
        </header>

        <div className="filter-bar bg-surface-low">
          <div className="search-input">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Buscar por ID, nombre o categoría..." />
          </div>
          <div className="filter-actions">
            <button className="btn-filter">
              <span className="material-symbols-outlined">filter_list</span>
              Categoría
            </button>
            <button className="btn-filter">
              <span className="material-symbols-outlined">sync</span>
              Estado
            </button>
          </div>
        </div>

        <div className="ledger-container bg-surface-lowest">
          <table className="ledger-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del Artículo</th>
                <th>Categoría</th>
                <th>Ubicación</th>
                <th>Última Inspección</th>
                <th className="text-right">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="id-cell">WF-8821</td>
                <td className="item-cell">
                  <div className="item-thumb">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCcC26mbQjY-SkkwIVII1sCkjd7dern8zz8tvd2nlDf2VnoaegDZnSaYmagWiXNV2tZFNWEFZXQt8b2c4zdUc60nL2TdrRj6LM69q8YAIz-DA7fkfL5H_YfxZZUABpvo3d2q-RhwfIFUwbA3hPeV7nFOluNmuAY2NcG3JBBajXKy0_uz5AAmc6dkrawCOKD2EEqSAkEPG0n9fVGrzf5BB_rtfoXkFayIEyPkieWebIRLhCTATv0utXQMehDWqDlW9Np5t2AhTA8B-q" alt="Coat" />
                  </div>
                  <span className="item-name">Abrigo de Lana Gris</span>
                </td>
                <td className="category-cell">Abrigos</td>
                <td>Sede Central - Bin A4</td>
                <td>Oct 12, 2023</td>
                <td className="status-cell text-right">
                  <span className="badge available">Disponible</span>
                </td>
              </tr>
              <tr className="rented-row">
                <td className="id-cell">WF-3419</td>
                <td className="item-cell">
                  <div className="item-thumb">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDZjblE9kkijoXX0Z8kizRDLLsZCRYwzLdNqOfWchDrPZq617E15nox0KuTBlCSuBG2l2zi9x8wOi_e8gwMkeY5fred8evmBaiaIxe-FuEh5os940NwLQYvMZVq-IckXeNnTetES-JnQAOhAgLdTjAFCfK0glFlWXQsIm5K_T3b0jlGBc7ctjnjfeACtOmvkDfx2a_lIyZu0ITdivErUYMV5fcA6pGSM_KLGk_uCnbx0nxOrtE8-BQilyLKinnjzQ3-CRx1HXdXKhH" alt="Gown" />
                  </div>
                  <span className="item-name">Vestido de Seda Esmeralda</span>
                </td>
                <td className="category-cell">Ropa de Noche</td>
                <td className="highlight-text">Clara Vanderwaal</td>
                <td>Nov 02, 2023</td>
                <td className="status-cell text-right">
                  <span className="badge rented">Alquilado</span>
                </td>
              </tr>
            </tbody>
          </table>
          <footer className="ledger-footer">
            <span>Mostrando 1-15 de 2,482 Prendas</span>
            <div className="pagination">
              <button className="material-symbols-outlined">chevron_left</button>
              <button className="active">1</button>
              <button>2</button>
              <button className="material-symbols-outlined">chevron_right</button>
            </div>
          </footer>
        </div>
      </main>
      
      {/* Sidebar Derecha */}
      <aside className="item-detail-sidebar glass-card editorial-shadow">
        <div className="sidebar-header">
           <button className="material-symbols-outlined">close</button>
           <div className="sidebar-actions">
             <button className="material-symbols-outlined">edit</button>
             <button className="material-symbols-outlined">more_vert</button>
           </div>
        </div>
        <div className="item-overview">
           <div className="detail-img">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxT2Y_czEMBYp-OqygXPDIR6XRhg0n87d-Ya6aEfjq92zL4N_tKk6zv3hKqgKZjnv2eJL2ssYwFjsrAM9XmG3vaRkhNJVZKs7hwCI3LwLfKnS58m5lsTHOQGgL7AQNELZ3_jyq-Ec2s9STbapAM9cNfIDAOoT-W_33edlKLu2fnVWkN3YU2v-pQIoAliVUFsSbp1lE5SwaBfEwEE0nPEmDhCugC0gSWSwYrAs40wo4Tru9MTQvrPZA4otV-XCUR5IYrYuVJTlfKqwc" alt="Emerald Gown" />
           </div>
           <h3>Vestido de Seda Esmeralda</h3>
           <p className="detail-meta">ID: WF-3419 • Ropa de Noche</p>
           <span className="badge rented lg">Alquilado Actualmente</span>
        </div>
        <div className="sidebar-section">
           <h4>Alquiler Activo</h4>
           <div className="rental-card bg-surface-low">
             <div className="user-avatar">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsa56qLwLDLnVM8NVk9aIQjsvl5tUR1gMETI9HDrn1kXz3Tla5FWO_4fKTqSXlHfYAUHAJHop2Ga8yttXNabZDtWcCnhOsOvPnvF3JJ7F5GEMd53gudHw91AFBpOkXaqAFF2zalV_V2fIAOuQsvPAwM61mkoJO4ByQunpfTBtdYcHbtvA5uUO2JRB3bNOxxaUIBftGzZb1cuFFA2BpA3jxb4hPqgTVAsLCYNaaqaRxEiG4R4QtaGGp-BHR8u_IPkXDBjNZTYILPX-g" alt="Clara" />
             </div>
             <div>
               <p className="user-name">Clara Vanderwaal</p>
               <p className="due-date">Vence: Nov 15, 2023</p>
             </div>
           </div>
        </div>
      </aside>
    </div>
  );
};

export default InventoryManagement;
