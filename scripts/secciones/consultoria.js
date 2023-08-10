import { tag } from "../componentes/tag.js?n=36";
import { bajarCss } from "../componentes/css.js?n=36";
import { contenido } from "../classes/Contenido.js?n=36";

export function pintarConsultoria() {
  // const enlace = "./scripts/secciones/consultoria.css";
  // bajarCss(enlace, dibujarConsultoria);

  dibujarConsultoria();
}

function dibujarConsultoria() {
  contenido.main.innerHTML = "";

  const divAbout = tag("div", contenido.main);
  divAbout.style.animation = "mostrar 3s ease-out forwards";
  divAbout.className = "about";

  const headerP = tag("section", divAbout);

  const divImgH = tag("div", headerP);

  const imgH = tag("img", divImgH);
  imgH.src = "./assets/imgs/logo-fundacion.png?n=36";

  const contenidoAbout = tag("section", divAbout);

  const divImg1 = tag("div", contenidoAbout);

  const img = tag("img", divImg1);
  img.src = "./assets/imgs/reportero-lados.png?n=36";

  const divTexto = tag("div", contenidoAbout);

  ponertextoAbout(divTexto);

  const divImg2 = tag("div", contenidoAbout);
  const im2 = tag("img", divImg2);
  im2.src = "./assets/imgs/reportero1.png?n=36";
}

function ponertextoAbout(divTexto) {
  const h1 = tag("h1", divTexto);
  h1.innerHTML = "CONSULTORIA Y CAPACITACIONES PROFESIONALES";

  const p = tag("p", divTexto);
  p.innerHTML = "Nuestro equipo de expertos en sociología y psicología está disponible para llevar a cabo investigaciones relacionadas con la violencia juvenil. Tenemos una amplia experiencia en la creación de metodologías participativas dirigidas a niños, niñas y adolescentes. Algunos de nuestros informes anteriores y publicaciones académicas se pueden descargar "

  const a = tag("a", p)
  a.href = "https://mihistoria.co/category/secciones/investigacion-info/";
  a.target = "_Blank";
  a.innerHTML = "aquí.";

  const p2 = tag("p", divTexto);
  p2.innerHTML = "En colaboración con la Universidad del Rosario y la Universidad Externado de Colombia, también ofrecemos formación a profesionales en prevención del reclutamiento infantil y en la reinserción social de jóvenes infractores. Para obtener más información, contáctenos en  "

  const a2 = tag("a", p2)
  a2.href = "mailto:info@mihistoria.co"
  a2.innerHTML = "info@mihistoria.co";

  const p3 = tag("p", divTexto);
  p3.innerHTML = 'Docentes y otros profesionales pueden acceder a nuestro programa gratuito de prevención de reclutamiento dirigido a jóvenes marginados en Colombia <a href="https://mihistoria.co/unidad-didactica/" target="_Blank">aquí </a>. Nuestros <i>Clubes de Periodismo</i> utilizan contenido producido por nuestros jóvenes periodistas en todo el país para promover <a href="https://mihistoria.co/habilidades-para-la-paz/" target="_Blank">habilidades de paz</a> y mejorar la perspectiva emocional de los jóvenes considerados en riesgo. Más detalles sobre el programa están disponibles <a href="https://mihistoria.co/capacitacion-para-profesionales/" target="_Blank">aquí.</a>'



}

