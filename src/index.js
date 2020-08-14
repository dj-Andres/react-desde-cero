//ejemplo de usar reacj reactdom

//1--importar librerias

import React from 'react'
import reactDOM from 'react-dom'
//como importar la clase de componentes
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.css'
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
//agg propiedades a los componentes//
reactDOM.render(<Card
    title="Mi Titulo"
    description="Ejemplo de uso"
    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
    leftColor="#A74CF2"
    rightColor="#617BFB"
/>,contenedor)
