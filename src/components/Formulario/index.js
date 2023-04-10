import './Formulario.css'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({ times, aoColaboradorCadastrado, cadastrarTime }) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={e => {
                e.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime })
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <TextField
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <TextField
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario