let seccionActiva = null;

const secciones = document.querySelectorAll('.seccion');

secciones.forEach(seccion => {
    const h2 = seccion.querySelector('h2');

    h2.addEventListener('click', () => {

        // 1) No hay sección abierta → abrir nueva
        if (seccionActiva === null) {
            abrir(seccion);
            seccionActiva = seccion;
        }

        // 2) Hiciste clic en la misma sección → cerrar
        else if (seccionActiva === seccion) {
            cerrar(seccion);
            seccionActiva = null;
        }

        // 3) Clic en otra sección → cerrar la anterior y abrir la nueva
        else {
            cerrar(seccionActiva);
            abrir(seccion);
            seccionActiva = seccion;
        }
    });
});

function abrir(seccion) {
    const contenido = seccion.querySelector('.contenido');

    // Reiniciamos temporalmente la altura a auto para medir el scrollHeight real
    contenido.style.height = "auto";

    // Obtenemos la altura total del contenido para animar
    let altura = contenido.scrollHeight + "px";

    // Volvemos a 0 para iniciar la animación correctamente
    contenido.style.height = "0px";

    // Forzamos reflow (necesario para que la transición funcione)
    contenido.offsetHeight;

    // Expandimos
    contenido.style.height = altura;
}

function cerrar(seccion) {
    const contenido = seccion.querySelector('.contenido');
    contenido.style.height = "0px";
}

h2.style.cursor = "pointer";
h2.style.userSelect = "none";