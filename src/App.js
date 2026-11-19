import React from 'react';
import { TarefasProvider, useTarefas } from './context/TarefasContext';
import FormularioTarefa from './components/FormularioTarefa';
import Filtros from './components/Filtros';
import ListaDeTarefas from './components/ListaDeTarefas';
import './App.css';

function Resumo() {
  const { estado } = useTarefas();
  const total = estado.tarefas.length;
  const concluidas = estado.tarefas.filter((t) => t.concluida).length;

  return (
    <p className="resumo">
      {concluidas} de {total} tarefa(s) concluída(s)
    </p>
  );
}

function App() {
  return (
    <TarefasProvider>
      <div className="container">
        <h1>Gerenciador de Tarefas</h1>
        <FormularioTarefa />
        <Filtros />
        <ListaDeTarefas />
        <Resumo />
      </div>
    </TarefasProvider>
  );
}

export default App;
