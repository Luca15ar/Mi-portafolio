import styles from '../modules/ReadMe.module.css';

export function ReadMe()
{
    return (
        <div className={styles.readMeContainer}>
            <h2 className={styles.readMeTitle}># ¡Bienvenid@ a mi portafolio!</h2>
            <p className={styles.readMeDescription}>Desde el explorador de archivos podés elegir que ver.</p>
        </div>
    )
}