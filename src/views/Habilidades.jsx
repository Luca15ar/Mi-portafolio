import styles from '../modules/Habilidades.module.css';

export function Habilidades()
{
    return (
        <div className={styles.habilidadesContainer}>
            <p>
                <span className={styles.varKeyword}>const </span>
                <span className={styles.varName}>Habilidades </span>
                =
                <span className={styles.varValue}> {"{"} </span><br/>
            </p>
            <div className={styles.habilidadesCardContainer}>

            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}