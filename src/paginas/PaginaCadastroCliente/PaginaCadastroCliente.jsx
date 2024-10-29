import './PaginaCadastroCliente.css';
import Principal from '../../comum/componentes/Principal/Principal';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import { useState } from 'react';

const PaginaCadastroCliente = () => {
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
    console.log('Novo Cliente:', novoCliente);
  };

  return (
    <Principal
      titulo="Novo Cliente"
      voltarPara="/lista-clientes"
    >
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número do seu Whatsapp"
        />
      </div>

      <div className="campo">
        <label>Data Nascimento</label>
        <input
          type="date"
          placeholder="Digite sua data de nascimento"
        />
      </div>

      <div className="campo">
        <label>CPF</label>
        <input type="tel" placeholder="Digite seu CPF" />
      </div>
      <BotaoCustomizado cor="secundaria" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
