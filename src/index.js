//ejemplo de usar reacj reactdom

//1--importar librerias

import React from 'react'
import reactDOM from 'react-dom'
//como importar la clase de componentes
import Card from './components/card'
//const element=<h1>Hola mundo a todos XD...</h1>
//const container=document.getElementById('root')
//2------ reactDOM.render(que___donde)
//reactDOM.render(element,container)

//3----introducir una variable
//const elemento=<h1>Hola mi nombre es: {nombre}</h1>
//4-----ejempplo de funcion 
//BORRAR PARA USAR LA CARPETA DE COMPONENTES//
//function obtenerusuario(usuario){
 // return usuario.name+ '  ' +usuario.apellido;
//}
//const usuario={
 // name:'Andres',
 // apellido:'Jimenez'
//}
//const elemento=<h1>Hola mi nombre es: {obtenerusuario(usuario)}</h1>
//const contenedor=document.getElementById('root')
//reactDOM.render(elemento,contenedor)

//ejecutar los componentes
const contenedor=document.getElementById('root')
reactDOM.render(<Card/>,contenedor)
