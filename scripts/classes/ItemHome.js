import { tag } from "../componentes/tag.js?n=2";

export class ItemHome{

    contenedor;
    titulo;
    texto;
    imgSrc;
    clase;
    fondoClase;
    color;
    botonTxt;
    videoSrc;

    construir(){
        this.contenedor.className = this.clase;
        this.contenedor.style.backgroundImage = `url(${this.imgSrc}`;

        const divI = tag("div", this.contenedor);

        const divInfo = tag("div", divI);        

        const h1 = tag("h1", divInfo);
        h1.innerHTML = this.titulo;

        const textoC = tag("p", divInfo);
        textoC.innerHTML = this.texto;

        const a = tag("a", divInfo);
        a.innerHTML = this.botonTxt;
        a.target = '_Blank';
        a.href = this.enlace;

        const divVideo = tag("div", divI);
        
        const divVideoI = tag("div", divVideo);

        const video = tag("video", divVideoI);
        video.style.border = `15px solid ${this.color}`
        video.src = this.videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsinline = true;
    }

}

