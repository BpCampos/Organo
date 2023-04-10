import { IoMdCloseCircleOutline } from 'react-icons/io';
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
        <div className='colaborador'>
            <IoMdCloseCircleOutline className='deletar' onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favorito'>
                    {colaborador.favorito
                        ? <MdFavorite onClick={favoritar} color='#ff0000' />
                        : <GrFavorite onClick={favoritar} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador