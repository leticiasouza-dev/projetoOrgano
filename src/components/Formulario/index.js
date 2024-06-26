import CampoDeTexto from '../CampoDeTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(props.time);

    const aoSalvar = (evento) =>{ 
        evento.preventDefault();
        props.aoColaboradorCadastrado({ // pequeno objeto sendo passado como props
            nome, 
            cargo, 
            imagem, 
            time
        })
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do calaborador.</h2>
                <CampoDeTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu Nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} // pegando o valor alterado e definindo no meu estado
                /> 

                <CampoDeTexto 
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu Cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                /> 

                <CampoDeTexto 
                    obrigatorio={true}
                    label='Imagem' 
                    placeholder='Informe o Endereço da Imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times' 
                    itens={props.times}
                    value={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
    
}

export default Formulario;