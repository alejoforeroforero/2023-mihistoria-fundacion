import { bajarCss } from "../componentes/css.js?n=1";
import { tag } from "../componentes/tag.js?n=1";
import { menu } from "../classes/Menu.js?n=1";

class Header {
  pintar() {
    const enlace = "./scripts/classes/Header.css";
    bajarCss(enlace, this.pintarHeader.bind(this));
  }

  pintarHeader() {
    const logoH = tag("div", this.headerC);
    logoH.className = "logo-header";
    
    this.pintarLogoHeader(logoH);

    const centroH = tag("div", this.headerC);
    centroH.innerHTML = "Mi historia fundación (titulo)";

    const loginH = tag("div", this.headerC);
    loginH.className = "header-menu";

    this.pintarMenu(loginH);
  }

  pintarLogoHeader(el) {
    el.innerHTML = "(Logo)";
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