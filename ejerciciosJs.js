/*
Ejercicio 1
Crear una función constructora la cual vamos a llamar cComputadora, deberá tener las siguientes propiedades:

ram:string
cpu:string
disco:string
monitor:string
gpu:boolean
*/

function Computadora (ram, cpu, disco, monitor, gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}


/*
Ejercicio 2
Crear 5 computadoras distintas y guardarlas (Array) de manera que luego podamos consultar cuántas computadoras 
tenemos y poder mostrarlas por consola. Además queremos ver el detalle de cada computadora por consola.
*/

let compu1 = new Computadora('16gb', '20mgh', 'ssd', 'LG', true);
let compu2 = new Computadora('8gb', '20mgh', 'hdd', 'Samsung', false);
let compu3 = new Computadora('12gb', '20mgh', 'hdd', 'Lenovo', true);
let compu4 = new Computadora('32gb', '20mgh', 'sdd', 'ASUS', false);
let compu5 = new Computadora('16gb', '20mgh', 'sdd', 'LG', true);

let computadoras = [compu1, compu2, compu3, compu4, compu5];

console.log('Hay ' + computadoras.length + ' computadoras');
computadoras.forEach(compu => {
    console.log(compu);
})


/*
Ejercicio 3
Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
*/

let computadorasGpu = computadoras.filter(
    computadora => computadora.gpu
);


/*
Ejercicio 4
Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, 
ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. Luego crear una función que, 
a partir de ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro el precio del litro de nafta.
*/

function calcularLitrosNafta(km) {
    return (km / 100) * 2;
}

function calcularPrecioLitro(precio, litros) {
    return litros * precio;
}

console.log('Precio del Litro de Nafta: ' + calcularPrecioLitro(100, calcularLitrosNafta(3000)));