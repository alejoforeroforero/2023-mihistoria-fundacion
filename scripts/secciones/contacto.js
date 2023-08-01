import { tag } from "../componentes/tag.js?n=21";
import { bajarCss } from "../componentes/css.js?n=21";
import { contenido } from "../classes/Contenido.js?n=21";

export function pintarContacto() {
  // const enlace = "./scripts/secciones/contacto.css";
  // bajarCss(enlace, dibujarContacto);

  dibujarContacto();
}

function dibujarContacto() {
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
  h1.innerHTML = "Contacto";

  const p = tag("p", divTexto);
  p.innerHTML = "Si tiene alguna duda, comentario o cualquier otra consulta sobre el trabajo que realizamos, por favor contáctenos a "

  const a = tag("a", p);
  a.href = "mailto:info@mihistoria.co"
  a.innerHTML = "info@mihistoria.co";
}

