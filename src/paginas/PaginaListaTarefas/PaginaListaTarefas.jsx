import './PaginaListaTarefas.css';
import { useState } from 'react';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';

import { FaTrashCan } from 'react-icons/fa6';

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim()) {
      tarefas.push({ descricao, feita: false });
      setTarefas([...tarefas]);
    } else {
      alert('Preencha o campo Descrição');
    }
    setDescricao('');
    document.getElementById('campoDescricao').focus();
  };
  const removerDaLista = (index) => {
    if (confirm('Tem certeza?')) {
    }
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  const marcarComoFeita = (index) => {
    const tarefaEdicao = tarefas[index];
    tarefas[index] = {
      ...tarefaEdicao,
      feita: !tarefaEdicao.feita,
    };

    setTarefas([...tarefas]);
  };

  return (
    <Principal
      titulo={`Lista de Tarefas (${tarefas.length})`}
      voltarPara="/"
    >
      <div>
        <input
          id="campoDescricao"
          type="text"
          placeholder="Descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              adicionarNaLista();
            }
          }}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>
          +
        </BotaoCustomizado>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.feita}
                onChange={() => marcarComoFeita(index)}
              />
              {item.descricao}
              <FaTrashCan
                color="red"
                onClick={() => removerDaLista(index)}
              />
            </li>
          );
        })}
      </ul>

      {tarefas.length === 0 && (
        <span>Não tem tarefa para listar</span>
      )}
    </Principal>
  );
};

export default PaginaListaTarefas;
