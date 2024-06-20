import CampoDeTexto from '../CampoDeTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do calaborador.</h2>
                <CampoDeTexto label='Nome' placeholder='Digite seu Nome'/> 
                <CampoDeTexto label='Cargo' placeholder='Digite seu Cargo'/> 
                <CampoDeTexto label='Imagem' placeholder='Informe o Endereço da Imagem'/>
                <ListaSuspensa label='Times' itens={times}/>
            </form>
        </section>

    )
    
}

export default Formulario;