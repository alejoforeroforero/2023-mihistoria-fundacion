import { header } from "./classes/Header.js?n=2";
import { menu } from "./classes/Menu.js?n=2";
import { contenido } from "./classes/Contenido.js?n=2";
import { tag } from "./componentes/tag.js?n=2";
import { pintarHome } from "./secciones/home.js?n=2";
import { pintarAbout } from "./secciones/about.js?n=2";
import { pintarContacto } from "./secciones/contacto.js?n=2";
import { pintarConsultoria } from "./secciones/consultoria.js?n=2";

empezar();

function empezar() {
  crearEstructura();
}

function crearEstructura() {
  const headerC = tag("header", document.body);
  header.headerC = headerC;

  header.pintar();

  const menuC = tag("div", document.body);
  menu.menuC = menuC;

  menu.pintar();

  const main = tag("main", document.body);

  contenido.main = main;

  escogerSeccion();
}

function escogerSeccion() {
  let nombrePagina = location.hash;

  if (nombrePagina === "#/home") {
    pintarHome();
  } else if (nombrePagina === "#/about") {
    pintarAbout();
  } else if (nombrePagina === "#/consultoria") {
    pintarConsultoria();
  } else if (nombrePagina === "#/contacto") {
    pintarContacto();
  } else {
    pintarHome();
  }
}

window.addEventListener("hashchange", function () {
  escogerSeccion();
});
