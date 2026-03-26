import perfil from '../assets/images/pfp.png';
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from "react-icons/fa";
import styles from '../modules/Inicio.module.css';

export function Inicio() 
{
    return (
        <div className={styles.inicioContainer}>
            <div className={styles.miPerfil}>
                <img src={perfil} alt="Foto de perfil" className={styles.perfilImg} />
                <p className={styles.bloqueCodigo}>
                    <span className={styles.varKeyword}>const </span>
                    <span className={styles.varName}>desarrollador </span>
                    =
                    <span className={styles.varValue}> {"{"} </span><br/>
                    
                    <span className={styles.indent}>
                        <span className={styles.varName}>name</span>: <span className={styles.stringValue}>"Luca Areco"</span>,
                    </span><br/>
                    <span className={styles.indent}>
                        <span className={styles.varName}>titulo</span>: <span className={styles.stringValue}>"Desarrollador front-end"</span>,
                    </span><br/>
                    <span className={styles.indent}>
                        <span className={styles.varName}>direccion</span>: <span className={styles.stringValue}>"Avellaneda, Buenos Aires, Argentina"</span>,
                    </span><br/>
                    <span className={styles.indent}>
                        <span className={styles.varName}>disponibilidad</span>: <span className={styles.varKeyword}>true</span>
                    </span><br/>
                    
                    <span className={styles.varValue}>{"}"}</span>
                </p>
            </div>

            <div className={styles.descripcion}>
                <div className={styles.miDescripcion}>
                    <h2>Desarrollador front-end</h2>
                    <p>
                        Soy un apasionado desarrollador front-end con experiencia en la creación de interfaces web atractivas y funcionales. 
                        Me especializo en tecnologías como C#, .NET, React, JavaScript, HTML y CSS, y mi objetivo es crear experiencias de usuario excepcionales que sean tanto visualmente atractivas como intuitivas.
                    </p>
                    
                    {/* Agrupamos los botones en un div para manejar su separación */}
                    <div className={styles.enlaces}>
                        <a className={styles.linkBtn} href="https://github.com/Luca15ar" target="_blank" rel="noopener noreferrer">
                            <VscGithub className={styles.githubIcon} /> GitHub
                        </a>
                        <a className={styles.linkBtn} href="https://www.linkedin.com/in/luca-areco-75a635354/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.linkedinIcon} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}