import React, { createContext, useContext, useReducer } from 'react';

// Estado inicial global da aplicação
const estadoInicial = {
  tarefas: [],
  filtro: 'todas', // 'todas' | 'concluidas' | 'pendentes'
};

// Reducer: sempre retorna um NOVO estado (atualização imutável)
function tarefasReducer(estado, acao) {
  switch (acao.type) {
    case 'ADICIONAR_TAREFA':
      return {
        ...estado,
        tarefas: [
          ...estado.tarefas,
          { id: Date.now(), nome: acao.payload, concluida: false },
        ],
      };

    case 'ALTERNAR_TAREFA':
      return {
        ...estado,
        tarefas: estado.tarefas.map((tarefa) =>
          tarefa.id === acao.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        ),
      };

    case 'REMOVER_TAREFA':
      return {
        ...estado,
        tarefas: estado.tarefas.filter((tarefa) => tarefa.id !== acao.payload),
      };

    case 'DEFINIR_FILTRO':
      return { ...estado, filtro: acao.payload };

    default:
      return estado;
  }
}

const TarefasContext = createContext();

// Provider que disponibiliza o estado global para toda a árvore de componentes
export function TarefasProvider({ children }) {
  const [estado, dispatch] = useReducer(tarefasReducer, estadoInicial);

  return (
    <TarefasContext.Provider value={{ estado, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

// Hook personalizado para consumir o contexto
export function useTarefas() {
  return useContext(TarefasContext);
}
