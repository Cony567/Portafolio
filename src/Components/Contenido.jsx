import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as ImIcons from 'react-icons/im'
import * as GiIcons from 'react-icons/gi'
import * as BsIcons from 'react-icons/bs'
import * as BoxIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as DiIcons from 'react-icons/di'
import * as GrIcons from 'react-icons/gr'
import * as SiIcons from 'react-icons/si'

// Ultima modificación Diego Canelo 7/04/2022
// contenido de rutinas
export const skills = [
    {
        title: 'Git',
        porcentaje: '60%',
        //icon: <BoxIcons.BiGitBranch size={70}></BoxIcons.BiGitBranch>,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-git" viewBox="0 0 16 16">
        <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
        </svg>
    },
    {
        title: 'GitHub',
        porcentaje: '55%',
        icon: <AiIcons.AiFillGithub size={70}></AiIcons.AiFillGithub>,
    },
    {
        title: 'MySQL',
        porcentaje: '70%',
        icon: <GrIcons.GrMysql size={70}></GrIcons.GrMysql>,
    },
    {
        title: 'MongoDB',
        porcentaje: '30%',
        icon: <DiIcons.DiMongodb size={70}></DiIcons.DiMongodb>,
    },
    {
        title: 'Java',
        porcentaje: '60%',
        icon: <DiIcons.DiJava size={70}></DiIcons.DiJava>,
    },
    {
        title: 'JavaScript',
        porcentaje: '57%',
        icon: <SiIcons.SiJavascript size={70}></SiIcons.SiJavascript>,
    },
    {
        title: 'Bootstrap',
        porcentaje: '80%',
        icon: <BsIcons.BsFillBootstrapFill size={70}></BsIcons.BsFillBootstrapFill>
    },
    {
        title: 'CSS',
        porcentaje: '55%',
        icon: <SiIcons.SiCss3 size={70}></SiIcons.SiCss3>,
    },
    {
        title: 'SpringBoot',
        porcentaje: '56%',
        icon: <SiIcons.SiSpringboot size={70}></SiIcons.SiSpringboot>,
    },
    {
        title: 'React',
        porcentaje: '47%',
        path: '/rutinas/espalda',
        icon: <FaIcons.FaReact size={70}></FaIcons.FaReact>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Node',
        porcentaje: '40%',
        path: '/rutinas/espalda',
        icon: <FaIcons.FaNodeJs size={70}></FaIcons.FaNodeJs>,
        cName: 'nav-text-dieta'
    },
    {
        title: 'Laravel',
        porcentaje: '68%',
        icon: <FaIcons.FaLaravel size={70}></FaIcons.FaLaravel>,
    },
    {
        title: 'Flutter',
        porcentaje: '37%',
        icon: <SiIcons.SiFlutter size={70}></SiIcons.SiFlutter>,
    },
    {
        title: 'Python',
        porcentaje: '41%',
        icon: <FaIcons.FaPython size={70}></FaIcons.FaPython>,
    },
    {
        title: 'Jest',
        porcentaje: '41%',
        icon: <SiIcons.SiJest size={70}></SiIcons.SiJest>,
    },
    {
        title: 'PHP',
        porcentaje: '41%',
        icon: <SiIcons.SiPhp size={70}></SiIcons.SiPhp>,
    },
    {
        title: 'Express',
        porcentaje: '41%',
        icon: <SiIcons.SiExpress size={70}></SiIcons.SiExpress>,
    },
    {
        title: 'C#',
        porcentaje: '35%',
        icon: <SiIcons.SiCsharp size={70}></SiIcons.SiCsharp>,
    },
    {
        title: 'Visual Studio code',
        porcentaje: '40%',
        icon: <SiIcons.SiVisualstudiocode size={70}></SiIcons.SiVisualstudiocode>,
    },
    {
        title: 'Postman',
        porcentaje: '40%',
        icon: <SiIcons.SiPostman size={70}></SiIcons.SiPostman>,
    }
]

export const proyectosGitHub = [
    {
        id: "nav-kosb",
        area: "nav-home-tab",
        title: 'Kosb',
        descripcion: 'Proyecto desarrollado para la universidad, se trata de una aplicación web que permite a sus usuarios poder postular, buscar y publicar ofertas de trabajo.',
        path: [{nombre: "KOSB ~ Busca tu trabajo", link: 'https://github.com/kosb-jobs/tsi_kosb',icon: <FaIcons.FaLaravel size={80}></FaIcons.FaLaravel>}],
        
        cName: 'show active'
    },
    {
        id: "nav-vic2",
        area: "nav-vic2-tab",
        title: 'Vic2',
        descripcion: 'Aplicación Web de ejercicios en casa y dietas dessarrollada bajo el stack de MERN, la aplicación permite que los visitantes vean las rutinas de ejercicios y visualicen las dietas disponibles para distintos tipos de cuerpos. Además cuenta con una parte administrativa, donde los administradores de la aplicacion pueden mantener a la misma y agregar dietas o ejercicios.',
        path: [
            {nombre: "Vic2 Vista",
            link:'https://github.com/S-A-EXETUM/Vic2_Vista', 
            icon: <FaIcons.FaReact size={70}></FaIcons.FaReact>}, 
            {nombre: "Vic2 BD",
            link:'https://github.com/S-A-EXETUM/Vic2_BD', 
            icon: <FaIcons.FaNodeJs size={70}></FaIcons.FaNodeJs>}],
        cName: ''
    },
    {
        id: "nav-API",
        area: "nav-API-tab",
        title: 'API',
        descripcion: 'Aquí podrá encontrar una apis desarrolladas en expres, por ejemplo una api de notas. También dejaré la parte visual de las notas y otras proyectos en frontend con consumo de APIs.',
        path: [
            {nombre: "Api de Notas Backend",
            link:'https://github.com/Cony567/notes-api-backend',
            icon:<FaIcons.FaNodeJs size={50}></FaIcons.FaNodeJs>},
            {nombre: "Api de Notas Frontend",
            link:'https://github.com/Cony567/notas-api-front',
            icon:<FaIcons.FaReact size={50}></FaIcons.FaReact>},
            {nombre: "Consumo de API Breaking Bad",
            link:'https://github.com/Cony567/breaking-bad-app',
            icon:<FaIcons.FaReact size={50}></FaIcons.FaReact>}
        ],
        cName: ''
    },
    {
        id: "nav-musicapp",
        area: "nav-musicapp-tab",
        title: 'Aplicación de Música',
        descripcion: 'Aplicación Web de música en proceso de desarrollo, fue creada para poder agregar artistas, albums y canciones asociados y así en un futuro implementar un inicio de sesión para administradores poder mantener la aplicación.',
        path: [
            {nombre: "App de Música",
            link:'https://github.com/Cony567/app-musica', 
            icon: <SiIcons.SiSpringboot size={70}></SiIcons.SiSpringboot>}
        ],
        cName: ''
    },
    {
        id: "nav-damas",
        area: "nav-damas-tab",
        title: 'Juego de las damas',
        descripcion: 'Aplicación de escritorio para jugar a las damas, desarrollado en java.',
        path: [
            {nombre: "Juego Damas", 
            link:'https://github.com/Cony567/Juego-de-Damas', 
            icon: <DiIcons.DiJava size={70}></DiIcons.DiJava>}
        ],
        cName: ''
    },
    {
        id: "nav-app-flutter",
        area: "nav-app-flutter-tab",
        title: 'Flutter',
        descripcion: 'Aplicación móvil de música realizada para la universidad en conjunto con un compañero, se pueden agregar artistas, álbums y canciones. Se realiza lo que es eliminado en cascada para los albums.',
        path: [
            {nombre: "MúsicApp Flutter", 
            link:'https://github.com/Cony567/MusicApp', 
            icon: <SiIcons.SiFlutter size={55}></SiIcons.SiFlutter>}
        ],
        cName: ''
    }
]