import { useState } from 'react'
import { filesData } from './data/filesData'
import { VscSearch, VscCode, VscFiles, VscChevronDown} from "react-icons/vsc";
import { ReadMe } from './views/ReadMe'
import { Inicio } from './views/Inicio'
import { SobreMi } from './views/SobreMi'
import { Proyectos } from './views/Proyectos'
import { Habilidades } from './views/Habilidades'
import { Contactos } from './views/Contactos'
import './App.css'

function App() 
{
  const [openTabs, setOpenTabs] = useState([]); 
  const [activeTab, setActiveTab] = useState(null);

  const abrirArchivo = (nombreArchivo) => 
  {
    if (!openTabs.includes(nombreArchivo))
    {
      setOpenTabs([...openTabs, nombreArchivo]);
    }

    setActiveTab(nombreArchivo);    
  }

  const cerrarPestaña = (e, nombreArchivo) =>
  {
    e.stopPropagation();

    const nuevasPestañas = openTabs.filter(tab => tab !== nombreArchivo);
    setOpenTabs(nuevasPestañas);
    
    if (activeTab === nombreArchivo)
    {
      setActiveTab(nuevasPestañas.length > 0 ? nuevasPestañas[nuevasPestañas.length - 1] : null);
    }
  }

  const renderFileContent = () => {
    if (!activeTab) 
    {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#666' }}>
          <h2>Abrí un archivo para empezar.</h2>
        </div>
      );
    }

    switch (activeTab) 
    {
      case "README.md":
        return <ReadMe />;
      case "inicio.jsx":
        return <Inicio />;
      case "sobre-mi.jsx":
        return <SobreMi />;
      case "proyectos.jsx":
        return <Proyectos />;
      case "habilidades.jsx":
        return <Habilidades />;
      case "contactos.jsx":
        return <Contactos />;
      default:
        return null;
    }
  }

  return (
    <div className="vscode-layout">
      {/* Cabecera */}
      <header><VscCode className="var-keyword"></VscCode> Portafolio Luca Areco</header>

      {/* Cuerpo principal de la interfaz */}
      <div className="vscode-body">
        
        {/* EXPLORADOR DE ACCIONES */}
        <aside className="activity-bar">
          <ul className="activity-icons">
            <li className="active">
              <VscFiles></VscFiles>
            </li>
            <li>
              <VscSearch></VscSearch>
            </li>
            <li>
              <VscCode></VscCode>
            </li>
          </ul>
        </aside>

        {/* EXPLORADOR DE ARCHIVOS */}
        <aside className="explorer">
          <h3>EXPLORADOR</h3>
          <h4><VscChevronDown></VscChevronDown> MI-PORTAFOLIO</h4>
          <ul>
            {filesData.map((file) => {
              const Icono = file.icon;

              return (
                <li 
                  key={file.id} 
                  className={`explorer-icon ${activeTab === file.name ? "active" : ""}`}
                  onClick={() => abrirArchivo(file.name)} 
                >
                  {Icono && <Icono className="file-explorer-icon" style={{ color: file.color }} />}
                  {file.name}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* ÁREA DE CONTENIDO */}
        <main className="editor">
          {/* LA BARRA DE PESTAÑAS (TABS-HEADER) */}
          <div className="tabs-header">
            {openTabs.map((tabName) => {

              const fileData = filesData.find((f) => f.name === tabName);
              const IconoArchivo = fileData?.icon;

              return (
                <button 
                  key={tabName} 
                  className={`tab-button ${activeTab === tabName ? "active-tab" : ""}`}
                  onClick={() => setActiveTab(tabName)}
                >
                  {IconoArchivo && <IconoArchivo className="file-tab-icon" style={{ color: fileData?.color }} />}
                  
                  {tabName}
                  <span className="close-tab" onClick={(e) => cerrarPestaña(e, tabName)} >
                    ×
                  </span>
                </button>
              );
            })}
          </div>

          {/* CONTENIDO DEL ARCHIVO */}
          <div className="file-content">
            {renderFileContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App;