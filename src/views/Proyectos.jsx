import styles from '../modules/Proyectos.module.css';
import { VscGithub, VscLinkExternal } from 'react-icons/vsc';
import { projectsData } from '../data/projectsData';

export function Proyectos() 
{
    return (
        <div className={styles.proyectosContainer}>
            <p>
                <span className={styles.varKeyword}>const </span>
                <span className={styles.varName}>proyectos </span>
                =
                <span className={styles.varValue}> {"{"} </span><br/>
            </p>
            <div className={styles.proyectosCardContainer}>
                {projectsData.map((proyecto) => (
                    <article key={proyecto.id} className={styles.proyectosCard}>
                        <div className={styles.imagenContainer}>
                            <img src={proyecto.imagen} alt={proyecto.titulo} className={styles.proyectoImagen}/>
                        </div>
                        <div className={styles.informacionContainer}>
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                            <div className={styles.tecnologiasContainer}>
                                <ul>
                                    {proyecto.tecnologias.map((tecnologia) => {
                                        const Icono = tecnologia;

                                        return (
                                            <li key={tecnologia} className={styles.tecnologiaCard}>
                                                {Icono && <Icono size={24} />}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className={styles.linksContainer}>
                                <a className={styles.linkRepositorio} href={proyecto.linkRepositorio} target="_blank" rel="noopener noreferrer">
                                    <VscGithub size={16}/> Ver código
                                </a>
                                <a className={styles.linkDemo} href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer">
                                    <VscLinkExternal size={16}/> Ver demo
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}