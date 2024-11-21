import React, { useContext, useState } from 'react';
import ListaDeTarefas from './components/ListaDeTarefas';
import Home from './components/Home';
import './App.css';
import TarefasContext from './context/TarefasContext';

function App() {
  const { dispatch } = useContext(TarefasContext);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const novaTarefaObj = {
        id: Date.now(),
        titulo: novaTarefa,
        concluida: false,
      };

      dispatch({
        type: 'ADICIONAR_TAREFA',
        payload: novaTarefaObj,
      });
      setNovaTarefa('');
    }
  };

  return (
    <div className="app">
      <Home />
      <div className="entrada-tarefa">
        <h1>Minhas Tarefas</h1>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <div className="filtros">
        <button
          onClick={() => dispatch({ type: 'ALTERAR_FILTRO', payload: 'todas' })}
        >
          Todas
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'ALTERAR_FILTRO', payload: 'concluidas' })
          }
        >
          Concluídas
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'ALTERAR_FILTRO', payload: 'pendentes' })
          }
        >
          Pendentes
        </button>
      </div>
      <ListaDeTarefas />
    </div>
  );
}

export default App;
