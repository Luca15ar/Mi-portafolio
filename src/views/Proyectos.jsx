import styles from '../modules/Proyectos.module.css';

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

            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}