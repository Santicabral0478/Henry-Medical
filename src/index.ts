const nombre1:string = "Carlin";

const frase2:string = "Hola, como estas. Me llamo"

const funcionEjemplo = (nombre: string, frase: string): string =>{
    return (`${frase} ${nombre}`);
}

console.log(funcionEjemplo(nombre1, frase2));
