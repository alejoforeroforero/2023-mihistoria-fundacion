import { tag } from "../componentes/tag.js?n=2";
import { bajarCss } from "../componentes/css.js?n=2";
import { contenido } from "../classes/Contenido.js?n=2";

export function pintarAbout() {
  const enlace = "./scripts/secciones/about.css";
  bajarCss(enlace, dibujarAbout);
}

function dibujarAbout(){
    contenido.main.innerHTML = "About";
}
