import './Time.css';

const Time = (props) => {
    // const css = {backgroundColor: props.corSecundaria}

    return(
        <section className='time' style={{backgroundColor: props.corSecundaria}}> {/*Adicionando a cor atráves de props*/}
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time;