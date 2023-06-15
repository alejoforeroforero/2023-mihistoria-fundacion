import { tag } from "../componentes/tag.js?n=2";
import { bajarCss } from "../componentes/css.js?n=2";
import { contenido } from "../classes/Contenido.js?n=2";

export function pintarContacto() {
  const enlace = "./scripts/secciones/contacto.css";
  bajarCss(enlace, dibujarContacto);
}

function dibujarContacto(){
    contenido.main.innerHTML = "Contacto";
}
