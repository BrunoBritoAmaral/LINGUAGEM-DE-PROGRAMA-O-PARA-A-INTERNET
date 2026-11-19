import React from 'react';
import { useTarefas } from '../context/TarefasContext';

function Tarefa({ tarefa }) {
  const { dispatch } = useTarefas();

  return (
    <li className={tarefa.concluida ? 'tarefa concluida' : 'tarefa'}>
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => dispatch({ type: 'ALTERNAR_TAREFA', payload: tarefa.id })}
        />
        <span>{tarefa.nome}</span>
      </label>
      <button
        className="remover"
        title="Remover tarefa"
        onClick={() => dispatch({ type: 'REMOVER_TAREFA', payload: tarefa.id })}
      >
        ✕
      </button>
    </li>
  );
}

export default Tarefa;
