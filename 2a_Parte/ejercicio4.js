// Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
// Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la 
//persona.
// Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
// Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

// function Persona(nombre, edad, genero){
// 	this.nombre = nombre,
// 	this.edad  = edad,
// 	this.genero = genero
// }
// var persona1 = new Persona('Linda', 22, 'Femenino');
// console.log(persona1);
// function Estudiante(curso, grupo){
// 	this.curso = curso,
// 	this.grupo  = grupo
// }
// var estudiante1 = new Estudiante('2°', 'A');
// console.log(estudiante1);
// function Profesor(asignatura, nivel){
// 	this.asignatura = asignatura,
// 	this.nivel  = nivel
// }
// var profesor1 = new Profesor('Español', 2);
// console.log(profesor1);