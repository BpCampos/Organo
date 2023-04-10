import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Time from './components/Time'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'



function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db6ebf',
    },
    {
      id: uuidv4(),
      nome: 'Mobile ',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletaColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudaCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App" >
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        cadastrarTime={cadastrarTime}
      />

      {times.map(time => <Time
        aoFavoritar={(resolverFavorito)}
        mudarCor={mudaCorTime}
        key={time.nome}
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletaColaborador}
      />)}

      <Footer />
    </div >
  );
}

export default App;
