import { tag } from "../componentes/tag.js?n=1";
import { bajarCss } from "../componentes/css.js?n=1";
import { contenido } from "../classes/Contenido.js?n=1";
import { ItemHome } from "../classes/ItemHome.js?n=1";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "";

    const divP = tag("div", contenido.main);
    divP.className = 'home-presentacion';
    divP.innerHTML = "Bienvenidos a fundación de Mi historia un proyecto que busca ....";

    const h1 = tag("h1", contenido.main);
    h1.className = "home-h1"
    h1.innerHTML = 'PROYECTOS';

    const divH = tag('div', contenido.main);

    const testimoniosC = tag('div', divH)

    const testimonios = new ItemHome();
    testimonios.contenedor = testimoniosC;
    testimonios.clase = 'home-item';
    testimonios.imgSrc = '../assets/imgs/testimonios.jpg';
    testimonios.texto = "Mi Historia: La niñez que peleó la guerra en Colombia es una serie de 24 animaciones cortas, que relatan los horrores del reclutamiento forzado y la participación de niños y adolescentes en más de cinco décadas de conflicto.";
    testimonios.botonTxt = "Visitar Mi Historia: La niñez que peleó la guerra en Colombia";
    testimonios.construir();

    const mihistoriaC = tag('div', divH)

    const mihistoria = new ItemHome();
    mihistoria.contenedor = mihistoriaC;
    mihistoria.clase = 'home-item';
    mihistoria.imgSrc = '../assets/imgs/mihistoria.png';
    mihistoria.botonTxt = "Visitar Mi Historia por y para jóvenes";
    mihistoria.texto = "Mi Historia: Periodismo por y para jóvenes es un proyecto que ......"; 
    mihistoria.construir();

    const miCaminoC = tag('div', divH)

    const miCamino = new ItemHome();
    miCamino.contenedor = miCaminoC;
    miCamino.clase = 'home-item';
    miCamino.imgSrc = '../assets/imgs/mi-camino.jpg';
    miCamino.botonTxt = "Visitar Mi Camino";
    miCamino.texto = "Mi Camino es un cómic que ......"; 
    miCamino.construir();
}


