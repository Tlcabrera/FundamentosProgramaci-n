//crear una clase

class Animal{
    //atributos públicos privados protegidos
    //pública: acceder desde la misma clase y por de ella 
    //Privada: solo accedo en la misma clase metodos accesores (encapsulamiento)
    //métodos públicos privados protegidos
    //metodo constructor
    //metodos accesores.
    //atributos
    nombre;
    edad;
    raza;
    // constructor
    //sintaxis contructor(name){declara los atributos que tiene la clase}
    /*constructor(nombre){
        this.nombre=nombre;
    }
    constructor(edad){
        this.edad=edad;
    }
    constructor(raza){
        this.raza=raza;
    }*/
    constructor(nombre,edad,raza){
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza
    }

    //funciones u operaciones

    hablar(){
        alert(`mi nombre es ${this.nombre} , mi edad es ${this.edad} y mi raza es ${this.raza}`)
    }


}

//creo un objeto-> Instancias de una clase
//sintaxis const nombreObjeto=new NombreClase()

const perro=new Animal("Firulais",2,"Criollo");
const leon=new Animal("Mateo",3,"Africana");
//invocar método
//sintaxis nombreObjeto.metodo

perro.hablar();
leon.hablar();




