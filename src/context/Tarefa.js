import React, { useContext } from 'react';
import TarefasContext from '../context/TarefasContext';

const Tarefa = ({ tarefa }) => {
  const { dispatch } = useContext(TarefasContext);

  const alterarStatus = () => {
    dispatch({
      type: 'ALTERAR_STATUS',
      payload: { id: tarefa.id, concluida: !tarefa.concluida },
    });
  };

  return (
    <div className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={alterarStatus}
      />
      <span>{tarefa.titulo}</span>
    </div>
  );
};

export default Tarefa;
