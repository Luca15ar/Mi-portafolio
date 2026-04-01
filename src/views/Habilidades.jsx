import styles from '../modules/Habilidades.module.css';
import { RiHtml5Fill, RiCss3Fill, RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiVite, SiNodedotjs, SiExpress, SiMysql, SiGit, SiGithub, SiVercel } from "react-icons/si";

export function Habilidades()
{
    return (
        <div className={styles.habilidadesContainer}>
            <p>
                <span className={styles.varKeyword}>const </span>
                <span className={styles.varName}>habilidades </span>
                =
                <span className={styles.varValue}> {"{"} </span><br/>
            </p>
            <div className={styles.habilidadesCardContainer}>
                <div className={styles.habilidadesContainer + " " + styles.habilidadesCard}>
                <h2 className={styles.varKeyword}>Frontend</h2>
                    <ul>
                        <li><RiHtml5Fill size={30} color="#E34F26"/>HTML5</li> {/*HTML5*/}
                        <li><RiCss3Fill size={30} color="#1572B6"/>CSS3</li> {/*CSS3*/}
                        <li><SiJavascript size={30} color="#F7DF1E"/>JavaScript</li> {/*JavaScript*/}
                        <li><RiReactjsLine size={30} color="#61DAFB"/>React</li> {/*React*/}
                        <li><SiVite size={30} color="#646CFF"/>Vite</li> {/*Vite*/}
                    </ul>
                </div>
                <div className={styles.habilidadesContainer + " " + styles.habilidadesCard}>
                <h2 className={styles.varValue}>Backend</h2>
                    <ul>
                        <li><SiNodedotjs size={30} color="#339933"/>Node.js</li> {/*Node.js*/}
                        <li><SiExpress size={30} color="#61DAFB"/>Express</li> {/*Express*/}
                        <li><SiMysql size={30} color="#E34F26"/>MySQL</li> {/*MySQL*/}
                    </ul>
                </div>
                <div className={styles.habilidadesContainer + " " + styles.habilidadesCard}>
                <h2 className={styles.stringValue}>Herramientas</h2>
                    <ul>
                        <li><SiGit size={30} color="#F05033"/>Git</li> {/*Git*/}
                        <li><SiGithub size={30} color="#181717"/>GitHub</li> {/*GitHub*/}
                        <li><SiVercel size={30} color="#000000"/>Vercel</li> {/*Vercel*/}
                    </ul>
                </div>
            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}