// ---------------------------
//   CARGAR BANDERAS PILOTOS
// ---------------------------
const banderas = {
    "GBR": "🇬🇧",
    "AUS": "🇦🇺",
    "NED": "🇳🇱",
    "MON": "🇲🇨",
    "ESP": "🇪🇸",
    "GER": "🇩🇪",
    "THA": "🇹🇭",
    "ITA": "🇮🇹",
    "FRA": "🇫🇷",
    "CAN": "🇨🇦",
    "NZL": "🇳🇿",
    "JPN": "🇯🇵",
    "BRA": "🇧🇷",
    "ARG": "🇦🇷"
};


// ---------------------------
//   CARGAR CAMPEONATO PILOTOS
// ---------------------------
async function cargarPilotos() {
    try {
        const res = await fetch("drivers.json");
        const data = await res.json();

        const lista = data.drivers;
        const tabla = document.getElementById("tablaPilotos");

        tabla.innerHTML = "";

        lista.forEach(p => {
            const fila = document.createElement("p");
            /*fila.classList.add(`driver-${e.name.replace(/ /g, "").toLowerCase()}`);*/
            fila.innerHTML = `
                <span class="pos">${p.position}</span>
                <span class="nombre">${banderas[p.nationality] || ""} ${p.givenName} ${p.familyName}</span>
                <span class="puntos">${p.points} pts</span>
            `;
            tabla.appendChild(fila);
        });

    } catch (error) {
        console.error("Error cargando pilotos:", error);
    }
}


// -------------------------------
//  CARGAR CAMPEONATO CONSTRUCTORES
// -------------------------------
async function cargarConstructores() {
    try {
        const res = await fetch("constructors.json");
        const data = await res.json();

        const lista = data.constructors;
        const tabla = document.getElementById("tablaConstructores");

        tabla.innerHTML = "";

        lista.forEach(e => {
            const fila = document.createElement("p");
            fila.classList.add(`team-${e.name.replace(/ /g, "").toLowerCase()}`);
            fila.innerHTML = `
                <span class="pos">${e.position}</span>
                <span class="nombre">${e.name}</span>
                <span class="puntos">${e.points} pts</span>
            `;
            tabla.appendChild(fila);
        });

    } catch (error) {
        console.error("Error cargando constructores:", error);
    }
}


// ---------------------------
//   EJECUTAR LA CARGA AL ENTRAR
// ---------------------------
cargarPilotos();
cargarConstructores();
