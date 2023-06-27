import { tag } from "../componentes/tag.js?n=2";
import { bajarCss } from "../componentes/css.js?n=2";
import { contenido } from "../classes/Contenido.js?n=2";
import { ItemHome } from "../classes/ItemHome.js?n=2";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "";

    const heroS = tag("section", contenido.main);
    heroS.className = "hero";

    pintarHero(heroS);

    const divH = tag('div', contenido.main);

    const testimoniosC = tag('div', divH)

    const testimonios = new ItemHome();
    testimonios.contenedor = testimoniosC;
    testimonios.clase = 'home-item azul';
    testimonios.color = 'rgb(17, 205, 250)';
    testimonios.imgSrc = '../assets/imgs/ninez.jpg';
    testimonios.videoSrc = '../assets/videos/ninez.mp4';
    testimonios.titulo = "MI HISTORIA: la niñez que peleó la guerra en Colombia";
    testimonios.texto = "Es una serie de 24 animaciones cortas que relatan los horrores del reclutamiento forzado y la participación de niños, niñas y adolescentes (NNA) en el conflicto colombiano. Los cortometrajes son el resultado de talleres de auto/biografía en los que víctimas del conflicto compartieron sus experiencias de violencia con jóvenes animadores y estudiantes de animación de Bogotá.";
    testimonios.botonTxt = "Visitar";
    testimonios.enlace = "https://mihistoria.co/testimonios";
    testimonios.construir();

    const mihistoriasC = tag('div', divH)

    const mihistoria = new ItemHome();
    mihistoria.contenedor = mihistoriasC;
    mihistoria.clase = 'home-item amarillo reverse';
    mihistoria.color = 'rgb(255, 200, 9)';
    mihistoria.imgSrc = '../assets/imgs/periodismo.jpg';
    mihistoria.videoSrc = '../assets/videos/periodismo2.mp4';
    mihistoria.titulo = "MI HISTORIA: periodismo por y para jóvenes";
    mihistoria.texto = "Se usa el periodismo como herramienta que permita a los NNA explorar no solo el mundo que los rodea sino también a ellos mismos. Se busca desarrollar la autoeficacia y fortalecer la autoestima.";
    mihistoria.botonTxt = "Visitar";
    mihistoria.enlace = "https://mihistoria.co";
    mihistoria.construir();

    const micaminoC = tag('div', divH)

    const micamino = new ItemHome();
    micamino.contenedor = micaminoC;
    micamino.clase = 'home-item naranja';
    micamino.color = 'rgb(242, 87, 30)';
    micamino.imgSrc = '../assets/imgs/mi-camino.jpg';
    micamino.videoSrc = '../assets/videos/mi-camino.mp4';
    micamino.titulo = "MI CAMINO";
    micamino.texto = "Es una serie de cómics interactivos cuyo objetivo es generar confianza y autoeficacia entre los NNA que viven en comunidades de alto riesgo en Colombia. Esto se debe a que los y las jóvenes en los márgenes del país, frente a contextos de violencia prolongada, pueden experimentar identidades negativas, lo que apuntala un pesimismo general sobre sus vidas y las oportunidades disponibles para ellos.";
    micamino.botonTxt = "Visitar";
    micamino.enlace = "https://mihistoria.co/micamino";
    micamino.construir();

    const alguienC = tag('div', divH)

    const alguien = new ItemHome();
    alguien.contenedor = alguienC;
    alguien.clase = 'home-item verde reverse';
    alguien.color = 'rgb(5, 242, 198)';
    alguien.imgSrc = '../assets/imgs/alguien.jpg';
    alguien.videoSrc = '../assets/videos/alguien.mp4';
    alguien.titulo = "ALGUIEN COMO YO";
    alguien.texto = "Es un proyecto que trabaja con jóvenes privados de la libertad para promover la justicia restaurativa. También trabaja con jóvenes en contextos de alto riesgo. A través de autoreflexión y la tutoría entre pares el objetivo es la reducción de violencia y la reinserción social.";
    alguien.botonTxt = "Visitar";
    alguien.enlace = "https://mihistoria.co/alguiencomoyo";
    alguien.construir();

    const radioC = tag('div', divH)

    const radio = new ItemHome();
    radio.contenedor = radioC;
    radio.clase = 'home-item morado';
    radio.color = 'rgb(244, 0, 245)';
    radio.imgSrc = '../assets/imgs/radio.jpg';
    radio.videoSrc = '../assets/videos/radio.mp4';
    radio.titulo = "RADIO TROMPO: la voz de Mi Historia";
    radio.texto = "Es una red de emisoras juveniles que promuevan la inclusión social de NNA en las comunidades más marginadas de Colombia.";
    radio.botonTxt = "Visitar";
    radio.enlace = "https://mihistoria.co/radiotrompo";
    radio.construir();
}

function pintarHero(padre){
  const video = tag("video", padre);
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsinline = true;
  video.src = "../../assets/videos/hero.mp4";
}


