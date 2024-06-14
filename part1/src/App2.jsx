import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/caida.png";
import img6 from "./assets/img5.png";
import img7 from "./assets/background.png";
import fanto from "./assets/Fanto.png";
import cristian from "./assets/Cristian.png";
import facu from "./assets/Facu.png";

const Navbar = () => {
  return (
    <ul>
      <li className="nav-menu">
        <a href="#inicio" className="nav-link">ARTEMIS</a>
        <a href="#nosotros" className="nav-link">Nosotros</a>
        <a href="#about" className="nav-link">Acerca de</a>
        <a href="#contact" className="nav-link">Contacto</a>
      </li>
    </ul>
  );
}

const Galeria = (props) => {
  const { images } = props;
  return (
    <div className='Galeria'>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index}`} />
      ))}
    </div>
  );
}

const Footer = () => {
  return (
    <footer>
      <p className='Texto'>Derechos de autor © Santiago Fantolino - IRESM.</p>
      <p className='Texto'>Más información al siguiente mail:</p>
      <p className='Texto'>artemisproyecto@gmail.com</p>
    </footer>
  );
}

const teamMembers = [
  {
    name: 'Santiago Fantolino',
    nickname: 'SANTI',
    description: 'Gran capacidad mental y perseverancia, sin embargo se frustra rápido y se deja llevar por su ego convirtiéndolo ocasionalmente en soberbio. Horario ocupado.',
  },
  {
    name: 'Cristian Zaragoza',
    nickname: 'CRIS',
    description: 'Aplicado y honesto, también responsable, a momentos competitivo y codicioso, a pesar de todo gran compañero e integrante, de gran ayuda por su conocimiento de electrónica.',
  },
  {
    name: 'Facundo Gomez',
    nickname: 'Facu',
    description: 'Inteligente, predispuesto a aprender e incorporar conceptos y herramientas nuevas, muy optimista, con tendencias de enojo y competitividad. Con condiciones y ganas de liderar el grupo.',
  },
];

const MemberCard = ({ member }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="front"><h1>{member.nickname}</h1></div>
        <div className="back">
          <h1>{member.name}</h1>
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const images = [img1, img2, img3, img4];
  const projectInfo = {
    introduction: 'Este proyecto se basa en el casco de “Iron Man”, algo que nos gustó e interesó desde un primer momento al grupo, al ver un paradigma amplio y llamativo donde podíamos trabajar en lo que nos gustaba. El mismo está compuesto por arduinos, Raspberry y mucha más tecnología que hacen un proyecto interesante.',
    furtherInfo: [
      'Desde un momento usamos cámaras y pantallas, aunque fuimos mejorando no solo el proyecto sino que además los conocimientos sobre el ámbito. Haciendo mucha tarea de campo probando e investigando cientos de cosas, estudiando, etc.',
      'Si bien nos tomamos el trabajo de programar en un idioma en el cual no es difícil, para nosotros ha sido una actividad muy reconfortadora e interesante el hacer el casco de nuestro superhéroe favorito y poder hacerlo nosotros mismos.',
      'Usaremos impresoras 3D, mercado libre, páginas web y demás para construir y conseguir todo lo necesario para poder lograr nuestros objetivos.',
      'El proyecto de donde nos basamos es este',
    ],
    projectLink: 'https://www.youtube.com/watch?v=0pcbx-TdSnw',
    functions: [
      {
        title: 'APERTURA Y CERRADURA DE CASCO',
        description: 'Esta la haremos con arduinos ya que no lleva mucha complejidad ni de un procesador muy potente, abaratando costos y usando módulos que ya tenemos.',
      },
      {
        title: 'FUNCIONAMIENTO DE LA VISTA CAMARA PANTALLA',
        description: 'Este es significativamente más complejo que el anterior al ya tener que disponer de un sistema operativo más potente como es Raspberry PI3. Transmitiendo en tiempo real lo que la cámara ve a dos pantallas puestas en cada ojo de la máscara, además tenemos pensado seguir adelante con el plan de integrar una brújula al casco, en una tercera pantalla integrada en una de las dos, para que quede aún mejor, pero preferimos dejarla más como una tarea secundaria y decidimos enfocarnos en nuestros nuevos desafíos como hacer que funcione algo totalmente desconocido para nosotros.',
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-encabezado">
        <Navbar />
      </header>
      <br />
      <main>
        <section className='section-1' id='inicio'>
          <h1>Artemis</h1>
          <h3>Vive tu sueño</h3>
        </section>
        <section className='section-4' id='nosotros'>
          <h1 className='titulos'>Un poco de nosotros</h1>
          <br />
          <div className='conteiner-mega'>
            {teamMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          <br />
        </section>
        <section className='section-2' id='about'>
          <br />
          <div className='Texto-contenedor1'>
            <div className='Texto1'>
              <p>{projectInfo.introduction}</p>
            </div>
          </div>
          <br />
          <br />
        </section>
        <section className='section-3'>
          <h1 className='titulos'>Imágenes del proyecto</h1>
          <Galeria images={images} />
        </section>
        <section className='section-5'>
          <div className='Texto-contenedor2'>
            <div className='Texto2'>
              {projectInfo.furtherInfo.slice(0, 3).map((info, index) => (
                <p key={index}>{info}<br /><br /></p>
              ))}
              <p>{projectInfo.furtherInfo[3]}</p>
              <br />
              <a href={projectInfo.projectLink}>
                <button className="button is-warning is-light">PROYECTO</button>
              </a>
              <br />
            </div>
          </div>
        </section>
        <section className='section-6'>
          <h1>Funciones del casco</h1>
          <div>
            {projectInfo.functions.map((func, index) => (
              <div key={index}>
                <p><strong>{func.title}</strong></p>
                <p>{func.description}</p>
                <br />
              </div>
            ))}
          </div>
        </section>
      </main>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;