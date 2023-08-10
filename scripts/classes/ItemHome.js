import { tag } from "../componentes/tag.js?n=36";

export class ItemHome {
  contenedor;
  titulo;
  texto;
  imgSrc;
  poster;
  clase;
  fondoClase;
  color;
  botonTxt;
  videoSrc;

  construir() {
    let path = window.location.pathname + this.imgSrc;

    this.contenedor.className = this.clase;
    this.contenedor.style.backgroundImage = `url(${path})`;

    const divI = tag("div", this.contenedor);

    const divInfo = tag("div", divI);

    const h1 = tag("h1", divInfo);
    h1.innerHTML = this.titulo;

    const textoC = tag("p", divInfo);
    textoC.innerHTML = this.texto;

    const divA = tag("div", divInfo);

    const a = tag("a", divA);
    a.innerHTML = this.botonTxt;
    a.target = "_Blank";
    a.href = this.enlace;

    const divVideo = tag("div", divI);

    const divVideoI = tag("div", divVideo);
    divVideoI.innerHTML = `<video id="${this.id}" autoplay muted playsinline></video>`;

    const video = document.getElementById(this.id);
    video.style.border = `15px solid ${this.color}`;
    video.src = this.videoSrc;
    video.loop = true;
    video.poster = this.poster;
  }
}
