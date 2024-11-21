import React, { createContext, useReducer } from 'react';

const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: 'todas',
};

function tarefasReducer(state, action) {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return { ...state, tarefas: [...state.tarefas, action.payload] };
    case 'ALTERAR_STATUS':
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload.id
            ? { ...tarefa, concluida: action.payload.concluida }
            : tarefa
        ),
      };
    case 'ALTERAR_FILTRO':
      return { ...state, filtro: action.payload };
    default:
      return state;
  }
}

export const TarefasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tarefasReducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
};

export default TarefasContext;
