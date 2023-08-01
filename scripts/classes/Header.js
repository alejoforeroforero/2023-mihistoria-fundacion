import { bajarCss } from "../componentes/css.js?n=21";
import { tag } from "../componentes/tag.js?n=21";
import { menu } from "../classes/Menu.js?n=21";

class Header {
  pintar() {
    const enlace = "./scripts/classes/Header.css";
    bajarCss(enlace, this.pintarHeader.bind(this));
  }

  pintarHeader() {
    const logoH = tag("div", this.headerC);
    logoH.className = "logo-header";

    const centroH = tag("div", this.headerC);
    centroH.innerHTML = "";

    const loginH = tag("div", this.headerC);
    loginH.className = "header-menu";

    this.pintarMenu(loginH);
  }

  pintarMenu(el) {

    const divM = tag('div', el);
    divM.className = 'hamburguesa';
    divM.addEventListener('click', ()=>menu.conmutarMenu())
  
    this.pintarHamburguesa(divM);
  }
  
  pintarHamburguesa(el){
    for(let i=0; i<3; i++){
      const div = tag('div', el);
      div.innerHTML = '';
    }
  }
}

export const header = new Header();
