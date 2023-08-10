import { header } from "./classes/Header.js?n=36";
import { menu } from "./classes/Menu.js?n=36";
import { contenido } from "./classes/Contenido.js?n=36";
import { tag } from "./componentes/tag.js?n=36";
import { pintarHome } from "./secciones/home.js?n=36";
import { pintarAbout } from "./secciones/about.js?n=36";
import { pintarContacto } from "./secciones/contacto.js?n=36";
import { pintarConsultoria } from "./secciones/consultoria.js?n=36";

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

  const footer = tag("footer", document.body);

  contenido.footer = footer;

  pintarFooter();
}

function escogerSeccion() {
  let nombrePagina = location.hash;

  window.scrollTo(0, 0);

  if (nombrePagina === "#/incio") {
    pintarHome();
  } else if (nombrePagina === "#/acerca-de-nosotros") {
    pintarAbout();
  } else if (nombrePagina === "#/consultoria") {
    pintarConsultoria();
  } else if (nombrePagina === "#/contacto") {
    pintarContacto();
  } else {
    pintarHome();
  }
}

function pintarFooter(){

  const enlaces = [
    {
      img:"./assets/imgs/f1.png?n=36",
      enlace:"https://www.facebook.com/MiHistoriaCo/"
    },
    {
      img:"./assets/imgs/f2.png?n=36",
      enlace:"https://www.instagram.com/mihistoriaco/"
    },
    {
      img:"./assets/imgs/f3.png",
      enlace:"https://twitter.com/MiHistoriaCo/"
    },
    {
      img:"./assets/imgs/f4.png",
      enlace:"https://www.youtube.com/@mihistoriaco/"
    }
  ]

  contenido.footer.innerHTML = "";

  enlaces.forEach(el=>{
    const a = tag("a", contenido.footer);
    a.href = el.enlace;
    a.target = "_Blank";

    const img = tag("img", a);
    img.src = el.img;
  })
}

window.addEventListener("hashchange", function () {
  escogerSeccion();
});
