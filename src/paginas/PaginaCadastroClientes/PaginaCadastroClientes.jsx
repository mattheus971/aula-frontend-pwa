import { useState } from 'react';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaCadastroClientes.css';

const PaginaCadastroClientes = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

  const salvar = () => {
    const novoCliente = {
      nome,
      email,
      celular,
      dataNascimento,
      cpf,
    };
  };

  return (
    <Principal
      titulo="Novo cliente"
      voltarPara="/lista-clientes"
    >
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Nome seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número do seu celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Data nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
          value={dataNascimento}
          onChange={(e) =>
            setDataNascimento(e.target.value)
          }
        />
      </div>

      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>

      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Cadastrar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroClientes;
