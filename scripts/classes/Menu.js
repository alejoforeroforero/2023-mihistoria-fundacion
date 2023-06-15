import { bajarCss } from "../componentes/css.js?n=2";
import { tag } from "../componentes/tag.js?n=2";


class Menu {
  menuActivo = false;

  pintar() {
    const enlace = "./scripts/classes/Menu.css";
    bajarCss(enlace, this.pintarMenu.bind(this));
  }

  pintarMenu() {
    this.menuC.className = "menu";

    const nav = tag("nav", this.menuC);

    const aH = tag("a", nav);
    aH.innerHTML = "Home";
    aH.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = "/#/home";
    });

    const a = tag("a", nav);
    a.innerHTML = "About";
    a.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = "/#/about";
    });

    const aP = tag("a", nav);
    aP.innerHTML = "Contact";
    aP.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = "/#/contacto";
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
