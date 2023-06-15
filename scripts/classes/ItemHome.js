import { tag } from "../componentes/tag.js?n=2";

export class ItemHome{

    contenedor;
    texto;
    imgSrc;
    clase;
    botonTxt;

    construir(){
        this.contenedor.className = this.clase;

        const img = tag('img', this.contenedor);
        img.src = this.imgSrc;

        const textoC = tag("p", this.contenedor);
        textoC.innerHTML = this.texto;

        const button = tag("button", this.contenedor);
        button.innerHTML = this.botonTxt;

    }

}

