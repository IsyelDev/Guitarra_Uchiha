function playSonido(elemento) {
    let sonido = document.getElementById(elemento);
    return sonido.play();
}
const listaDeBotones = document.querySelectorAll(".tecla");
for (let contador = 0; contador < listaDeBotones.length; contador++) {
    const teclita = listaDeBotones[contador];
    const cancion = teclita.classList[1];
    const sonido = `sonido_${cancion}`
    teclita.addEventListener("click", () => {
        playSonido(sonido)
    });
    teclita.addEventListener("keydown", (evento) => {
        console.log(evento.code.includes("Space"))
        if (evento.code.includes("Space")) {
            teclita.classList.add("activa");
        } else {
            teclita.classList.remove("activa");
        }
    });
    console.log("Vuelta " + contador + ": canción " + cancion.charAt(0).toUpperCase() + cancion.substring(1).toLowerCase())
}
