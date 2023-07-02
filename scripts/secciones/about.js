import { tag } from "../componentes/tag.js?n=9";
import { bajarCss } from "../componentes/css.js?n=9";
import { contenido } from "../classes/Contenido.js?n=9";

export function pintarAbout() {
  const enlace = "./scripts/secciones/about.css";
  bajarCss(enlace, dibujarAbout);
}

function dibujarAbout(){
    contenido.main.innerHTML = "";

    const divAbout = tag("div", contenido.main);
    divAbout.className = "about";

    const img = tag("img", divAbout);
    img.src = "./assets/imgs/sobre-nosotros.jpg";
}
