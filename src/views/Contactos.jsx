import styles from '../modules/Contacto.module.css';

export function Contactos()
{
    return (
        <div className={styles.contactoContainer}>
            <p>
                <span className={styles.varKeyword1}>async </span>
                <span className={styles.varKeyword2}>function </span>
                <span className={styles.varName}>EnviarCorreo </span>
                <span className={styles.varValue}>() </span>
                <span className={styles.varValue}>{"{"}</span><br/>
            </p>
            <div className={styles.contactoCardContainer}>

            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}