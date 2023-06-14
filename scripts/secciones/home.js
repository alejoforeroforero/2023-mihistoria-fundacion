import { tag } from "../componentes/tag.js?n=1";
import { bajarCss } from "../componentes/css.js?n=1";
import { contenido } from "../classes/Contenido.js?n=1";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "jajaja home";
}
