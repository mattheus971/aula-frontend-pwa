import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";

function Principal() {
  return (
    <main className="principal_root">
      Principal
      <BotaoCustomizado aoClicar={() => alert('Funcionou!')}>Salvar</BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert('Funcionou!')}>Salvar</BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert('Funcionou!')}>Salvar</BotaoCustomizado>
      <BotaoCustomizado aoClicar={() => alert('Funcionou!')}>Salvar</BotaoCustomizado>
    </main>
  );
}

export default Principal;