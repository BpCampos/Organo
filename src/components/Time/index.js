import Colaborador from '../Colaborador'
import './Time.css'
import hexToRga from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section section style={{ backgroundColor: hexToRga(time.cor, '0.6') }
        } className='time' >
            <input onChange={e => mudarCor(e.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
            <h2 style={{ borderColor: time.cor }}>{time.nome}</h2>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return (
                        <Colaborador
                            corDeFundo={time.cor}
                            key={colaborador.id}
                            colaborador={colaborador}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />)
                })}
            </div>
        </section >

    )
}

export default Time