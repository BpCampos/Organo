import Colaborador from '../Colaborador'
import './Time.css'
import hexToRga from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section section style={{ backgroundColor: hexToRga(time.cor, '0.6') }
        } className='time' >
            <input onChange={e => mudarCor(e.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
            <h2 style={{ borderColor: time.cor }}>{time.nome}</h2>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador corDeFundo={time.cor} key={colaborador.nome} id={colaborador.id} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar} />
                })}
            </div>
        </section >

    )
}

export default Time