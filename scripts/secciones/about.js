import { tag } from "../componentes/tag.js?n=1";
import { bajarCss } from "../componentes/css.js?n=1";
import { contenido } from "../classes/Contenido.js?n=1";

export function pintarAbout() {
  const enlace = "./scripts/secciones/about.css";
  bajarCss(enlace, dibujarAbout);
}

function dibujarAbout(){
    contenido.main.innerHTML = "About";
}
