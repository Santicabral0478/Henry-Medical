"use strict";
const ubicacion = [40.7128, -74.0060];
const imprimirCordenada = (coordenada) => {
    return `Latitud: ${coordenada[0]}, Longitud: ${coordenada[1]}`;
};
console.log(imprimirCordenada(ubicacion));
