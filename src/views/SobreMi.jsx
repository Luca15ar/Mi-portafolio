import styles from '../modules/SobreMi.module.css';
import { FaDownload } from 'react-icons/fa';
import miCV from '../assets/CV - Luca Areco 2026.pdf';

export function SobreMi() 
{
    return (
        <div className={styles.sobreMiContainer}>
            <p>
                <span className={styles.varKeyword}>const </span>
                <span className={styles.varName}>sobreMi </span>
                =
                <span className={styles.varValue}> {"{"} </span><br/>
            </p>
            <div className={styles.sobreMiCardContainer}>
                <div className={styles.formacionAcademica + ' ' + styles.sobreMiCard}>
                    <h2>Formación académica</h2>
                    <ul>
                        <li>
                            <h3>Tecnicatura en Programación - UTN</h3>
                        </li>
                        <li>
                            <h3>
                                Fundamentos de programación web - Digital House
                            </h3>
                        </li>
                        <li>
                            <h3>
                                Nivel 2 Digital Skills - Digital House
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className={styles.experienciaLaboral + ' ' + styles.sobreMiCard}>
                    <h2>Experiencia laboral</h2>
                    <ul>
                        <li>
                            <div className={styles.experienciaItem}>
                                <h3>Desarrollador Frontend (en progreso)</h3>
                                <h4>Experiencia profesional (próximamente)</h4>
                                <p>Proyectos personales y trabajos académicos</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.intereses + ' ' + styles.sobreMiCard}>
                    <h2>Intereses</h2>
                    <h3>Frontend, frameworks, desarrollo web, backend, APIs y aprendizaje continuo.</h3>
                </div>
                <div className={styles.miCv + ' ' + styles.sobreMiCard}>
                    <p>
                        Si querés saber más sobre mi formación y experiencia, podés descargar mi CV haciendo clic.
                    </p>
                    <a className={styles.cvLink} href={miCV} download="CV - Luca Areco 2026.pdf">
                        <FaDownload /> Descargar
                    </a>
                </div>
            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}