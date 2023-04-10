import { IoMdCloseCircleOutline } from 'react-icons/io';
import './Colaborador.css'

const Colaborador = ({ id, nome, cargo, imagem, corDeFundo, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <IoMdCloseCircleOutline className='deletar' onClick={() => aoDeletar(id)} />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador