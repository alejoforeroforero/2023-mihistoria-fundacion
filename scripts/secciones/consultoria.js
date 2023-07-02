import { tag } from "../componentes/tag.js?n=9";
import { bajarCss } from "../componentes/css.js?n=9";
import { contenido } from "../classes/Contenido.js?n=9";

export function pintarConsultoria() {
  const enlace = "./scripts/secciones/consultoria.css";
  bajarCss(enlace, dibujarConsultoria);
}

function dibujarConsultoria(){
    contenido.main.innerHTML = "";

    const divC = tag("div", contenido.main);
    divC.className = "consultoria";

    const img = tag("img", divC);
    img.src = "./assets/imgs/consultoria-mockup.jpg";
}
