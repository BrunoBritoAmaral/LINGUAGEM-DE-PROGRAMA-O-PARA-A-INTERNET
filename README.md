# Gerenciador de Tarefas (React)

Aluno: Bruno Eduardo Brito Amaral
RA: 5101493-2

Aplicação React para adicionar tarefas, marcar como concluídas e filtrar por status (Todas, Concluídas, Pendentes). O estado global é gerenciado com `useContext` + `useReducer`.

## Como executar

```bash
yarn
yarn start
```

Acesse http://localhost:3000

## Estrutura

```
src/
├── App.js                      # Componente raiz (envolve tudo no Provider)
├── App.css
├── index.js
├── context/
│   └── TarefasContext.js       # Estado global: createContext + useReducer
└── components/
    ├── FormularioTarefa.js     # Input + botão (estado local com useState)
    ├── Filtros.js              # Botões Todas / Concluídas / Pendentes
    ├── ListaDeTarefas.js       # Lista filtrada
    └── Tarefa.js               # Item com checkbox
```

## Requisitos atendidos

1. **Adicionar tarefas** – `FormularioTarefa` com input e botão.
2. **Lista com checkbox** – `ListaDeTarefas` renderiza cada `Tarefa` com caixa de seleção.
3. **Filtragem** – `Filtros` altera o filtro no estado global.
4. **Estado global** – `TarefasContext` com `useReducer`; todas as atualizações são imutáveis (spread, `map`, `filter`).
