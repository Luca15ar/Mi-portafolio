import { RiHtml5Fill, RiCss3Fill, RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiVite, SiNodedotjs, SiExpress, SiMysql, SiGit, SiGithub, SiVercel, SiE } from "react-icons/si";
import imgProyecto1 from '../assets/images/imagenes_proyectos/mi-portafolio.png';

export const projectsData = [
    {
        id : 1,
        titulo : "Portafolio personal",
        descripcion : "Mi portafolio personal, hecho en React con diseño de VS Code, donde hablo un poco sobre mi, muestro mis proyectos y habilidades.",
        tecnologias : [RiCss3Fill, RiReactjsLine, SiJavascript, SiVite, SiNodedotjs],
        linkRepositorio : "https://github.com/Luca15ar/Mi-portafolio.git",
        linkDemo : "https://mi-portafoliol.vercel.app/",
        imagen : imgProyecto1,
    },
    // {
    //     id : 2,
    //     titulo : "Gamex",
    //     descripcion : "Plataforma web completa para compra de juegos digitales. Proyecto académico.",
    //     tecnologias : [RiHtml5Fill, RiCss3Fill, SiNodedotjs, SiExpress, SiMysql],
    //     linkRepositorio : "",
    //     linkDemo : "",
    //     imagen : "",
    // }
];