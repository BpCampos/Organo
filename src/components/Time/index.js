import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (

        props.colaboradores.length > 0 && <section section style={{ backgroundColor: props.corSecundaria }
        } className='time' >
            <h2 style={{ borderColor: props.corPrimaria }}>{props.nome}</h2>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section >

    )
}

export default Time