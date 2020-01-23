class Libros{

    constructor(titulo,autor,ano,genero){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero = genero

    }

    mostrar(){
        return `El titulo del libro es : ${this.titulo}, su autor es "${this.autor}", año: ${this.ano} y genero : ${this.genero}`

        }
}

 const p_nombre = () => {
    let nombre 
    do {

        nombre = prompt("Ingrese titulo del libro");

     }while(nombre == "");
    
    
    return nombre;
 }

 const p_autor = () => {
    let autor1
    do {

       autor1 = prompt("Ingrese el autor: ");

    }while(autor1 == "");
   
   
   return autor1;
}

const p_año = () => {
    let anio1;
    do{
        anio1 = prompt("Ingrese año de edicion (4 digitos): ");
    }while(anio1.length < 4 || isNaN(anio1)); // Se controla el largo y que sea numero
    
    return anio1;
}

const p_gen = () => {
    let genero1;
    
        do {
            genero1 = prompt("Ingrese genero: ");
            }while (genero1.toLowerCase() != "aventura" && genero1.toLowerCase() != "terror" && genero1.toLowerCase() !="fantasia");

    return genero1;
}

const mostrartodo = () => {

    for (let i = 0 ; i < 3; i++){
        biblioteca[i].mostrar();
    }

}

const mostrarAordenados = (biblio,a) => {
    for(let i= 0;i<3;i++){
        a[i] = biblio[i].autor;
    
    }
    a.sort();
    return aOrdenados.textContent = `Autores ordenados : ${a}`;
    
}

const m_genero = (biblio) => {

    let x = prompt("Ingrese genero que quiere buscar");
    let elec = new Array();
    
    // Recorro la biblioteca, si el genero es el que se eligio lo guardo en otro array
    for(let i=0; i<3 ;i++){  // For resumido, que recorre sin usar contadores 
        if (biblio[i].genero == x){
            elec.push(biblio[i]);// Agrego a lo ultimo el libro
        }
    }
   return console.log(elec);

}


//Creamos las variables
const libro_info= document.querySelector('#libro_info'); // Seleccionar elemento por ID, otro metodo
const aOrdenados = document.querySelector('#aOrdenados');
const busqueda = document.querySelector('#busqueda');
let biblioteca = new Array();
let autoresO = new Array();


for (let i=0;i<3;i++){
    
    let title = p_nombre();
    let auth = p_autor();
    let age = p_año();
    let gen = p_gen();
    biblioteca[i] = new Libros(title,auth,age,gen);
    
}

//mostrartodo();
mostrarAordenados(biblioteca,autoresO);
m_genero(biblioteca);
//}//libro_info.textContent = ` ${n_libro.mostrar()} `;



