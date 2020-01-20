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

       autor = prompt("Ingrese el autor: ");

    }while(autor1 == "");
   
   
   return autor1;
}

const p_año = () => {
    let anio1;
    do{
        anio = prompt("Ingrese año de edicion (4 digitos): ");
    }while(anio1.length < 4);
    
    return anio1;
}

const p_autor = () => {
    let genero;
    do {
        genero = prompt("Ingrese genero: ");
    }while (genero != "aventura" || genero != "terror" || genero != "fantasia");




}

//const libro_info = document.getElementById("libro_info");
const libro_info= document.querySelector('#libro_info'); // Seleccionar elemento por ID, otro metodo



let biblioteca = new Array();



for (const i=0;i<3;i++){
    
    let title = p_nombre();
    let auth = p_autor();
    let age = p_año();
    let gen = p_gen();
    biblioteca[i] = new Libros(title,auth,age,gen);
    
}

libro_info.textContent = ` ${biblioteca[1].mostrar()} `;


