import React, { useContext } from 'react';
import TarefasContext from '../context/TarefasContext';
import Tarefa from '../context/Tarefa';

const ListaDeTarefas = () => {
  const { state } = useContext(TarefasContext);
  const { tarefas, filtro } = state;

  // Filtra as tarefas com base no filtro selecionado
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'todas') return true;
    if (filtro === 'concluidas') return tarefa.concluida;
    if (filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  return (
    <div>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </div>
  );
};

export default ListaDeTarefas;
