import './Botao.css'

const Botao = (props) => {
    return(
        <button className='botao' on>{props.children}</button>
    )
}

export default Botao;