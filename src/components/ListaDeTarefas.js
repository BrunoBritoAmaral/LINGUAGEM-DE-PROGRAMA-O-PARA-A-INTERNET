import React from 'react';
import { useTarefas } from '../context/TarefasContext';
import Tarefa from './Tarefa';

function ListaDeTarefas() {
  const { estado } = useTarefas();
  const { tarefas, filtro } = estado;

  // Filtra sem modificar a lista original (filter retorna um novo array)
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'concluidas') return tarefa.concluida;
    if (filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  if (tarefasFiltradas.length === 0) {
    return <p className="vazio">Nenhuma tarefa para exibir.</p>;
  }

  return (
    <ul className="lista">
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
