import React, { useState } from 'react';
import { useTarefas } from '../context/TarefasContext';

function FormularioTarefa() {
  // Estado LOCAL: texto digitado no input
  const [nomeTarefa, setNomeTarefa] = useState('');
  const { dispatch } = useTarefas();

  function handleSubmit(evento) {
    evento.preventDefault();
    const nome = nomeTarefa.trim();
    if (!nome) return;

    dispatch({ type: 'ADICIONAR_TAREFA', payload: nome });
    setNomeTarefa('');
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome da tarefa..."
        value={nomeTarefa}
        onChange={(e) => setNomeTarefa(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;
