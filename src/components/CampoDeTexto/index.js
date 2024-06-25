import { useState } from 'react';
import './CampoDeTexto.css';

const CampoDeTexto = (props) => {
    const PlaceholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor} type="text" placeholder={PlaceholderModificada} required={props.obrigatorio} />
        </div>
        
    )
}

export default CampoDeTexto;

