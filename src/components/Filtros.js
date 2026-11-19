import React from 'react';
import { useTarefas } from '../context/TarefasContext';

const opcoes = [
  { valor: 'todas', rotulo: 'Todas' },
  { valor: 'concluidas', rotulo: 'Concluídas' },
  { valor: 'pendentes', rotulo: 'Pendentes' },
];

function Filtros() {
  const { estado, dispatch } = useTarefas();

  return (
    <div className="filtros">
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          className={estado.filtro === opcao.valor ? 'ativo' : ''}
          onClick={() => dispatch({ type: 'DEFINIR_FILTRO', payload: opcao.valor })}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
