import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { FaRegTrashCan } from "react-icons/fa6";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim()) {
      setTarefas([...tarefas, descricao]);
    } else {
      alert("Preencha o campo de descrição");
    }
    setDescricao("");
  };

  const removerDaLista = (index) => {
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <div>
        <input
          id="campoDescricao"
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              adicionarNaLista(); // Adiciona quando o Enter for pressionado
            }
          }}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>{" "}
        {/* Adiciona no clique do botão */}
      </div>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            {item}
            <FaRegTrashCan onClick={() => removerDaLista(index)} />
          </li>
        ))}
      </ul>
    </Principal>
  );
};

export default PaginaListaTarefas;
