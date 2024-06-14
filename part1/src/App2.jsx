import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import img5 from "./assets/caida.png"
import img6 from "./assets/img5.png"
import img7 from "./assets/background.png"
import fanto from "./assets/Fanto.png"
import cristian from "./assets/Cristian.png"
import facu from "./assets/Facu.png"

const Navbar = () => {
  return (
      <ul>
        <li className="nav-menu">
          <a href="#inicio" className="nav-link" >ARTEMIS</a>
          <a href="#nosotros" className='nav-link'>Nosotros</a>
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
          <img key={index} src={image}  />
        ))}
      </div>
    
  );
}

const Footer = () => {
  return (
    <footer>
      <p className='Texto'>Derechos de autor © Santiago Fantolino - IRESM.</p>
      <p className='Texto'>Mas informacion al siguente mail:</p>
      <p className='Texto'>artemisproyecto@gmail.com</p>

    </footer>
  );
}


const App = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="App">
      <header className="App-encabezado">
        <Navbar/>
      </header>
      <br />
    <main >   
    <section className='section-1' id='inicio'>
        <h1>Artemis</h1>
        <h3>Vive tu sueño</h3>
    </section>
    <section className='section-4' id='nosotros'> 
 
    <h1 className='titulos'>Un poco de nosotros</h1>
    <br />
  <div className='conteiner-mega'> 
    <div class="container">
      <div class="card">
        <div class="front"><h1>SANTI</h1></div>
          <div class="back">
            <h1>Santiago Fantolino</h1>
            <p>
              Gran capacidad mental y perseverancia, sin embargo se frustra rapido y se deja llevar 
              por su ego convirtiendolo ocacionalmente en soberbio. Horario ocupado.
            </p>
          </div>
        </div>
    </div>

    <div class="container">
       <div class="card">
        <div class="front"><h1>CRIS</h1></div>
          <div class="back">
            <h1>Cristian Zaragoza</h1>
            <p>
              Aplicado y honesto, tambien responsable, a momentos competitivo y codicioso, a pesar de todo
              gran compañero e integrante, de gran ayuda por su conocimiento de electronica.
            </p>
          </div>
        </div>
    </div>

    <div class="container">
       <div class="card">
        <div class="front"><h1>Facu</h1></div>
          <div class="back">
            <h1>Facundo Gomez</h1>
            <p>
              Inteligente, predispuesto a aprender e incorporar conceptos y herramientas nuevas, muy optimista, con tendencias
              de enojo y competitividad. Con condiciones y ganas de liderar el grupo.
            </p>
          </div>
        </div>
    </div>
  </div>
    <br />
    </section>
    <section className='section-2' id='about'>
      <br />
      <div className='Texto-contenedor1'>
                <div className='Texto1'>
                     <p>
                        Este proyecto se basa en el casco de “Iron Man”, algo que nos gustó e interesó desde un primer momento al grupo, al ver un paradigma amplio y llamativo donde podíamos trabajar en lo que nos gustaba. 
                        El mismo está compuesto por arduinos, Raspberry y mucha más tecnología que hacen un proyecto interesante.
                    </p>
                </div>
            </div> 
            
    <br />
    <br />
    </section>
    <section className='section-3'>
      <h1 className='titulos'>Imagenes del proyecto </h1>
      <Galeria images={images}/>
    </section>
    <section className='section-5'>
      <div className='Texto-contenedor2'>
        <div className='Texto2'>
          <p>
            Desde un  momento usamos cámaras y pantallas, aunque fuimos mejorando no solo el proyecto sino que además los conocimientos sobre el ámbito. Haciendo mucha tarea de campo probando e investigando cientos de cosas, estudiando, etc.
          </p>
          <br />
          <p>
            Si bien nos tomamos el trabajo de programar en un idioma en el cual no es difícil, para nosotros ha sido una actividad muy reconfortadora e interesante el hacer el casco de nuestro superhéroe favorito y poder hacerlo nosotros mismos.
          </p>
          <br />
          <p>
            Usaremos impresoras 3d, mercado libre, paginas web y demás para construir y conseguir todo lo necesario para poder lograr nuestros objetivos
          </p>
            <br />
          <p>
            El proyecto de donde nos basamos es este
          </p>
          <br />
          <a href="https://www.youtube.com/watch?v=0pcbx-TdSnw" >
            <button className="button is-warning is-light">PROYECTO</button>
          </a>
          <br />
        </div>
      </div>
    </section>
    <section className='section-6'>
      <h1>Funciones del casco</h1>
      <div>
      <p>
        Utilizando ese modelo como base y nuestras ideas el casco resulto con dos mecanimos concretos:
      </p>
      <br />
      <p>
        <ul>APERTURA Y CERRADURA DE CASCO</ul>
        <br />
        Esta la haremos con arduinos ya que no lleva mucha complejidad ni de un procesador muy potente, abaratando costos y usando módulos que ya tenemos.
        <br />
        <br />
        <ul>FUNCIONAMIENTO DE LA VISTA CAMARA PANTALLA</ul>
        <br />
          Este es significativamente más complejo que el anterior al ya tener que disponer de un sistema operativo más potente como es Raspberry PI3.
          Transmitiendo en tiempo real lo que la cámara ve a dos pantallas puestas en cada ojo de la máscara, además tenemos pensado seguir adelante con el plan de integrar una brújula al casco, en una tercera pantalla integrada en una de las dos, para que quede aun mejor, pero preferimos dejarla más como una tarea secundaria y decidimos enfocarnos en nuestros nuevos desafíos como hacer que funcione algo totalmente desconocido para nosotros.
        </p>
        </div>
    </section>        
      </main>
    <div id='contact'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
