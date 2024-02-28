type Coordenada = [number, number];

const ubicacion: Coordenada = [40.7128, -74.0060];

const imprimirCordenada = (coordenada: Coordenada):string=>{
    return `Latitud: ${coordenada[0]}, Longitud: ${coordenada[1]}`;
}

console.log(imprimirCordenada(ubicacion));
