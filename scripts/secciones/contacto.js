import { tag } from "../componentes/tag.js?n=1";
import { bajarCss } from "../componentes/css.js?n=1";
import { contenido } from "../classes/Contenido.js?n=1";

export function pintarContacto() {
  const enlace = "./scripts/secciones/contacto.css";
  bajarCss(enlace, dibujarContacto);
}

function dibujarContacto(){
    contenido.main.innerHTML = "Contacto";
}
