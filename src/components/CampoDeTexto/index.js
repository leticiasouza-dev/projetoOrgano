import './CampoDeTexto.css';

const CampoDeTexto = (props) => {
    const PlaceholderModificada = `${props.placeholder}...`;

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input type="text" placeholder={PlaceholderModificada}/>
        </div>
        
    )
}

export default CampoDeTexto;

