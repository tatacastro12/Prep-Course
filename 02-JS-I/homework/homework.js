// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "tatiana castro";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 345;

// Crea una variable booleana:
var nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
return str 
  
}

function suma(x, y) {
  var suma = x+y;
  return suma;
  
}
suma(3,5)

console.log (suma);

function resta(x, y) {
 var diferencia = x - y
 return diferencia;
  
}

var diferenciaderesta = resta(15,8)
console.log(diferenciaderesta)

function multiplica(x, y) {
 var multiplica = x*y;
 return multiplica;
  
}

var resultadomultiplicado = multiplica(6,12) 
console.log(resultadomultiplicado)

function divide(x, y) {
 var producto= x/y;
 return producto 
  
}

var producto = divide (156,12)
console.log(producto)


function sonIguales(x, y) {
  return x === y;
  
}
sonIguales(4,4) // true


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length
}
tienenMismaLongitud("casa","lore") // true



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
  
}
menosQueNoventa(18) // true

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50
}
mayorQueCincuenta(11) //false

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
obtenerResto (12, 4) // 0



function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0
  
}
esPar(8) // true

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2!== 0
}
esImpar(4)// false

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num ** 2
  
}
elevarAlCuadrado(7)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num ** 3
}
elevarAlCubo(9)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return num ** exponent
  
}

elevar(4,5) //1024

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}
redondearNumero(15.3) // 15


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}
redondearHaciaArriba(10.2) // 11

function numeroRandom() {

  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random() * (0 - 1) + 1;
  
}
numeroRandom()

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0) return false;
  return numero > 0 ? "Es positivo" : "Es negativo";
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}

agregarSimboloExclamacion("hola, mundo");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return  nombre + " " + apellido;
  
}
combinarNombres ("tatiana", "castro")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
return "Hola " + nombre + "!"
  
}
obtenerSaludo("Juan")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho
}
obtenerAreaRectangulo(5, 3) // 15


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return 4 * lado
}
retornarPerimetro(8) // 32

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return (base * altura) / 2;
}
areaDelTriangulo(8, 6) //24


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20
}
deEuroAdolar(12) // 14.39

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  const expresion = /^[aeiouáéíóú]{1}$/i;
  return expresion.test(letra) ? "Es vocal" : "Dato incorrecto";

}
esVocal("a")



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
