//creando componentes en este caso componente de clase//
import React from 'react'
import ejemplo from '../img/descarga.jpg'
import circulo from '../img/images.jpg'
import './style/card.css'
//herencia de component//
class Card extends React.Component{
    render(){
        const{title,description,img,leftColor,rightColor}=this.props
        return (
                <div className="Card mx-auto fitnes-Card" style={{backgroundImage:`url(${circulo}),linear-gradient(to right, ${leftColor}, ${rightColor})`}}>
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={img} className="float-right foto"/>
                            </div>
                            <div className="col-6 fitnes-Card-info">
                                <h1>{title}</h1> 
                                <p>{description}</p>
                            </div>
                        </div>        
                    </div>
                </div>
        )
    }
}
//exportar la clase //
export default Card