import { tag } from "../componentes/tag.js?n=21";
import { bajarCss } from "../componentes/css.js?n=21";
import { contenido } from "../classes/Contenido.js?n=21";

export function pintarAbout() {
  // const enlace = "./scripts/secciones/about.css";
  // bajarCss(enlace, dibujarAbout);

  dibujarAbout()
}

function dibujarAbout() {
  contenido.main.innerHTML = "";

  const divAbout = tag("div", contenido.main);
  divAbout.className = "about";

  const headerP = tag("section", divAbout);

  const divImgH = tag("div", headerP);

  const imgH = tag("img", divImgH);
  imgH.src = "./assets/imgs/logo-fundacion.png?n=21";

  const contenidoAbout = tag("section", divAbout);

  const divImg1 = tag("div", contenidoAbout);

  const img = tag("img", divImg1);
  img.src = "./assets/imgs/reportero-lados.png?n=21";

  const divTexto = tag("div", contenidoAbout);

  ponertextoAbout(divTexto);

  const divImg2 = tag("div", contenidoAbout);
  const im2 = tag("img", divImg2);
  im2.src = "./assets/imgs/reportero1.png?n=21";
}

function ponertextoAbout(divTexto) {
  const h1 = tag("h1", divTexto);
  h1.innerHTML = "SOBRE NOSOTROS";

  const p = tag("p", divTexto);
  p.innerHTML = "En la Fundación Mi Historia estamos comprometidos con una agenda de paz que busca transformar la realidad de nuestra sociedad. Estos son nuestros objetivos."

  const ol = tag("ol", divTexto)

  const li1 = tag("li", ol)
  li1.innerHTML = "Prevenir el reclutamiento infantil."

  const li2 = tag("li", ol)
  li2.innerHTML = "Reducir la violencia."

  const li3 = tag("li", ol)
  li3.innerHTML = "Promover la responsabilidad social."

  const li4 = tag("li", ol)
  li4.innerHTML = "Avanzar en la reinserción efectiva de los jóvenes infractores."

  const p2 = tag("p", divTexto);
  p2.innerHTML = 'Hemos desarrollado un enfoque innovador que llamamos "autobiografía creativa". Este enfoque nos permite construir, desafiar y comunicar narrativas personales de manera única. Se trata de una búsqueda de significado dentro de las experiencias de vida de cada individuo.  Los investigadores y los participantes de esta investigación co-crean historias producidas en primera persona y en forma artística (video, audio, escritura creativa, animación, fotografía, arte, etc.), generalmente durante largos períodos de tiempo. A lo largo de los últimos cinco años, hemos trabajado con niños, niñas, adolescentes y jóvenes marginados, incluyendo a aquellos desvinculados, pertenecientes a pandillas y privados de su libertad.'

  const p3 = tag("p", divTexto);
  p3.innerHTML = 'La autobiografía creativa es una metodología transformadora que tiene como objetivo generar cambios a nivel individual y comunitario a través de la inclusión. Pone gran énfasis en la importancia de la voz, en escuchar y ser escuchado. Mediante esta metodología, fomentamos la autorreflexión profunda al explorar el pasado, el presente y el futuro. Además, fortalecemos lo que hemos identificado como "Habilidades para la Paz", con el fin de fomentar una ciudadanía responsable y comprometida.'

  const p4 = tag("p", divTexto);
  p4.innerHTML = "Al involucrar a los niños, niñas, adolescentes y jóvenes considerados en riesgo, identificamos cómo perciben sus vidas, sus comunidades y su futuro en contextos prolongados de violencia. Nuestro objetivo es desarrollar su confianza en sí mismos, fortalecer su autoestima y promover su autoeficacia. Estos son conceptos fundamentales que nos permiten comprender por qué muchos de estos jóvenes pueden llegar a ver a los grupos armados y al crimen organizado como opciones viables para sus vidas."

  const p5 = tag("p", divTexto);
  p5.innerHTML = 'En la Fundación Mi Historia, estamos convencidos de que a través de la creatividad y el poder de la narrativa personal, podemos construir un futuro de paz duradero. ¡Únete a nosotros en esta misión de transformación social!'
}
