
alert("Wepa que?"); /* Detiene el flujo, y no permite hacer nada*/

document.write( "hola vieja"); /* Escribe en el documento HTML */

let nombre = prompt("Ingrese su nombre: "); /* Detiene el programa, y muestra una ventana para ingreso.
Todo lo que se ingresa se guarda en formato texto */

document.write("<p>");

document.write("Hola " + nombre);

document.write("</p>"); 


var nombres = ["wep","guido","lucas"];  //No se utiliza mas VAR, ahora es LET
var apellido = new Array();  // Creamos un array vacio
const PI = 3.14; // Las constantes se declaran con MAYUSCULA por norma

/* Funciones */

alert(nombre[1]);

// Cadenas

nombres.length // Largo string
nombres[nombres.length-1] // Forma de acceder al ultimo item del array
nombres.push("tito"); // Agregar al fondo un item del string
nombres.unshift("marshe"); // Agregar al principio del string 
nombres.indexOf("guido"); // Devuelve la posicion de la primera coincidencia del string pasado
nombres.lastIndexOf("guido"); // Devuelve la ultima coincidencia del string.
nombres.includes("b"); // Tambien busca el caracter, y nos devuelve True o False, se puede agregar la posicion de comienzo
nombres.replace("hola","tuvi"); // Busca hola y lo reemplaza x tuvi
nombres.substring(3,7); // Va hasta una posicion(3), y toma hasta la 7ma posicion en este caso. Si no se incluye el final, toma todo.
nombres.slice(); // Copia la string integramente
nombres.slice(-4); // Igual que las subs, la dif es que al poner un negativo te devuelve en este caso los 4 ultimos
nombres.slice(2,-3); // En este caso se toman desde el 3er lugar, y no se toma en cuenta los ultimos 3 caracteres
nombres[0].toLowerCase // Tansforma todo en minuscula
nombres[0].toUpperCase // Transforma todo en mayuscula
nombres.trim(); // Elimina los espacios en blanco del inicio y el final
nombres.startWith("H"); // Devuelve True si comienza con H la cadena(caseSensitive), o false en caso contrario 
nombres.startWith("H",4); // Lo mismo, comenzando desde el 4 lugar
nombres.endsWith("o");  // True si termina con el caracter o
nombres.endsWith("o", 4); // Solo buscamos el caracter en los primero 4 lugares
nombres.pop; // Se elimina el ultimo elemento
nombres.shift // Se elimina al principio
nombres.repeat(3); //Repite 3 veces la cadena
'a'.repeat(3); // Repite 3 veces el caracter
Array.isArray(nombres); // Nos devuelve True si es array.
nombres.reverse(): // Escribe los elementos al reves
nombres.join(""); // Separa los elementos con el string que le pasamos, sin pasarle nada lo separa con comas
nombres.splice(3); // Elimina todos los elementos a partir de la posicion ingresada
nombres.splice(2,2); // Elimina desde la posicion 2, dos elementos hacia adelante
nombres.splice(2,2,10,30,44); // Elimina desde la posicion 2, dos elementos. Y coloca 10,30,44
nombres.splice(2,0,10,30,44); // Desde la posicion 2, al colocar 0. Se agregan los elementos sin borrar nada.


//Templates de Strings
let n= "pedro";
let apellido= "gomez";
let edad= 33;
console.log(`Hola ${n} ${apellido} . Tienes ${edad}`); // Forma de escribir sin tener que abrir y cerrar comillas.


//Operador ternario

(condicion) ? true : false
(condicion) ?
    (primer sentencia),
    (segunda sentencia)
    :
    (primera sentencia),
    (segunda sentencia)

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ?
        ( 
            console.log(`${num} es par`),
            console.log(`${num} es par2`)
         ) 
        :
        ( 
          console.log(`${num} es impar`),
          console.log(`${num} es impar2`)
        )



// Bucles for of y for in

let names= ["pepe","pablo","marshe"];

for(let name of names){  // For resumido, que recorre sin usar contadores 
    console.log(name)
}

for(let name in names){ // No imprime lo que esta en cada lugar, sino el indice. En este caso: 0,1,2
    console.log(name)
}


// Objetos

const Personas = {
name : "juan",
age : 44,
hijos : ["Laura", "Diego"]
}

console.log(Personas.name);
console.log(Personas.['name']); // Otra forma de acceder a name
console.log(Personas.hijos[0];)

for (const key in Personas){ //Imprimimos "name","age" y "hijos"
    console.log(key);
}

for (const key in Personas){ //Imprimimos "juan","44", "laura" y "diego"
    console.log(Personas[key]);
}

for(const key in Personas.hijos){ // Para usar for in, necesitamos aclarar a que valor del objeto queremos entrar
    console.log(key);
}

console.log(`Hola ${Personas.name} tienes ${Personas.age} y tus hijos son
${Personas.hijos.join(', ')}`) // Como imprimir los valores




// Clases

class Pibes{
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(){
        return `Hola me llamo ${this.nombre}`
    }
} // Ya creada la clase, instanciamos

const Juan= new Pibes("Juan","Nuñez",28);
const Pepe= new Pibes("Pepe","Nuñez",24);


console.log(Juan.saludar()); //Llamamos al metodo de la clase




parseInt(nombres[0]); // Lo convierte a Int
parseFloat(nombres[0]);  // Lo convierte a Float
isNaN(nombres[0]); // Controla que no sea un numero, devuelve false si es un numero.
typeof(nombres[0]) == "string"; // Typeof nos devuelve el tipo de dato.
var dia = new Date();  // Pide el dia, en formato largo
document.write(dia.toDateString()); // Imprime el dia de formato legible

console.log(nombre); // Nos muestra en consola la variable 

/*Programacion Orientada a Objetos*/

var miboton= document.getElementById("boton1");

miboton.style.width="1000px";
miboton.style.background= "red";


/* Funciones propias */

function funcion1 (parametros1){
return algo;
}

funcion1();


// Funciones formas mas actuales

const funcion2 = (parametros) =>{

// Si es una sola linea no necesitamos el Return ni llaves.
// Si tenemos muchas lineas si o si necesitamos el RETURN.
}




const elementoPorId= document.querySelector('#un-id'); // Seleccionar elemento por ID
const elementoPorClass= document.querySelector('.una-class'); // Seleccionar elemento por Class
const elementoPorTag= document.querySelector('un-tag'); // Seleccionar elemento por ID
const elementoPorNombre= document.querySelector('[nombre= "un-id"]'); // Seleccionar elemento por Nombre









/* JQuery */

<script src = "jquery.bla"> </script> // Primero tenemos que referenciar donde encontrar el archivo

<script>
    $(document).ready(function(){

        // Aca va el codigo. Y por esta funcion, hasta que no carga el script no empieza la pag
    )};
</script>

$(".nombre"); // Para trabajar sobre un atributo CLASS, con JQuery
$("#nombre"); // Para trabajar sobre un atributo ID, con JQuery
$("p"); // Para trbajar con todas las etiquetas P en este caso

var puntuacion1= document.getElementById("nombre").value; // Forma de guardar con JS clasica
var puntuacion = $("#nombre").value // Forma de guardar datos con JQuery de un ID


$("body").hide().fadeIn(5000); // Referenciamos a el "body", y le aplicamos fadeIn y el tiempo para aparecer

$(#carrete img).hide(); /* Crea un bucle para aplicarle a todas las imagenes del carrete la funcion hide */

$(#foto).height(500).width(500).hide().fadeIn(1000); // Funciones encadenadas cn JQuery, le damos alto, ancho y que aparezca

$("#foto").html("<p> Hola vieja </p>"); /* Reemplaza lo que hay en #foto, por un parrafo, reemplaza etiquetas html */
$("#foto").text(" Hola vieja "); // Reemplaza solo el texto que hay en foto, no etiquetas

$("#foto").append("<p> Hola vieja </p>"); // Agrega luego de #foto, un parrafo dentro del mismo contenedor
$("#foto").prepend("<p> Hola vieja </p>"); // Agrega antes de #foto, un parrafo dentro del mismo contenedor

$("#foto").before("<p> Hola vieja </p>"); // Agrega antes del contenedor #foto, un parrafo
$("#foto").after("<p> Hola vieja </p>"); // Agrega luego del contenedor #foto, un parrafo

