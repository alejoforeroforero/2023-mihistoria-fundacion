import { bajarCss } from "../componentes/css.js?n=36";
import { tag } from "../componentes/tag.js?n=36";


class Menu {
  menuActivo = false;

  pintar() {
    const enlace = "./scripts/classes/Menu.css";
    bajarCss(enlace, this.pintarMenu.bind(this));
  }

  pintarMenu() {
    this.menuC.className = "menu";

    let path = window.location.pathname;

    const nav = tag("nav", this.menuC);

    const aH = tag("a", nav);
    aH.innerHTML = "Inicio";
    aH.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = `${path}#/incio`;
    });

    const a = tag("a", nav);
    a.innerHTML = "Acerca de nosotros";
    a.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = `${path}#/acerca-de-nosotros`;;
    });

    const aC = tag("a", nav);
    aC.innerHTML = "Consultoria";
    aC.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = `${path}#/consultoria`;
    });

    const aP = tag("a", nav);
    aP.innerHTML = "Contacto";
    aP.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = `${path}#/contacto`;
    });
  }

  conmutarMenu() {
    if (this.menuActivo) {
      this.menuActivo = false;
      this.menuC.style.animation = "slide-up 300ms ease-out forwards";
    } else {
      this.menuActivo = true;
      this.menuC.style.animation = "slide-down 200ms ease-out forwards";
    }
  }
}

export const menu = new Menu();
