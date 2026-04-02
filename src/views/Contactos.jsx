import styles from '../modules/Contactos.module.css';
import { useRef, useState } from 'react';
import { VscGithub , VscMail , VscCheck } from 'react-icons/vsc';
import { FaLinkedin } from "react-icons/fa";

export function Contactos()
{
    const form = useRef();
    const [estadoEnvio, setEstadoEnvio] = useState('');
    const [cargando, setCargando] = useState(false);

    const enviarCorreo = async (e) =>
    {
        e.preventDefault();
        setCargando(true);

        const formData = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value
        };

        try
        {
            const response = await fetch('/api/enviar-correo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok)
            {
                setEstadoEnvio('¡Mensaje enviado con éxito!');
                form.current.reset();

                setTimeout(() => setEstadoEnvio(''), 8000);
            }
            else
            {
                setEstadoEnvio('Falló la comunicación con la API.');
                setTimeout(() => setEstadoEnvio(''), 8000);
            }
        } 
        catch
        {
            setEstadoEnvio('No se pudo conectar con el servidor.');
            setTimeout(() => setEstadoEnvio(''), 8000);
        }
        finally
        {
            setCargando(false);
        }
    }

    const [ copiado, setCopiado ] = useState(false);
    const miCorreo = "arecoluca03@gmail.com";

    const copiarCorreo = async (e) => 
    {
        e.preventDefault();

        try
        {
            await navigator.clipboard.writeText(miCorreo);

            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        }
        catch
        {
            console.error('Error al copiar el correo al portapapeles');
        }
    }

    return (
        <div className={styles.contactoContainer}>
            <p>
                <span className={styles.varKeyword1}>async </span>
                <span className={styles.varKeyword2}>function </span>
                <span className={styles.varName1}>EnviarCorreo </span>
                <span className={styles.varValue}>() </span>
                <span className={styles.varValue}>{"{"}</span><br/>
            </p>
            <div className={styles.contactoCardContainer}>
                <form ref={form} onSubmit={enviarCorreo} className={styles.contactoCard}>
                    <h3> 
                        <span className={styles.varKeyword3}>const 
                        </span> <span className={styles.varName2}>nombre </span> 
                        = 
                    </h3>
                    <input className={styles.inputContacto} type="text" name="user_name" required />

                    <h3>
                        <span className={styles.varKeyword3}>const </span>
                        <span className={styles.varName2}>email </span> 
                        = 
                    </h3>
                    <input className={styles.inputContacto} type="email" name="user_email" required />

                    <h3>
                        <span className={styles.varKeyword3}>const </span> 
                        <span className={styles.varName2}>mensaje </span>
                        = 
                        </h3>
                    <textarea name="message" rows="5" required></textarea>

                    <button className={styles.enviarBtn} type="submit" disabled={cargando}>
                        {cargando ? 'Enviando...' : 'Enviar'}
                    </button>

                    {estadoEnvio && <p>{estadoEnvio}</p>}
                </form>
            </div>
            <div className={styles.contactoCardContainer}>
                <div className={styles.contactoCard}>
                    <h3>También podés contactarme directamente por:</h3>
                    <ul className={styles.contactosList}>
                        <li>
                            <a className={styles.linkBtn} href="https://github.com/Luca15ar" target="_blank" rel="noopener noreferrer">
                                <VscGithub/>
                            </a>
                        </li>
                        <li>
                            <a className={styles.linkBtn} href="https://www.linkedin.com/in/luca-areco-75a635354/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin/>
                            </a>
                        </li>
                        <li>
                            <button className={styles.copiarBtn} href="#" onClick={copiarCorreo} title='Copiar correo'>
                                {copiado ? <VscCheck size={20} className={styles.checkIcon}/> : <VscMail size={20}/>}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                <span className={styles.varValue}>{"}"}</span>
            </p>
        </div>
    )
}