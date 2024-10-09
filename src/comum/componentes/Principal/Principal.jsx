import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";

function Principal() {
  return (
    <main className="principal_root">
      Principal
      <BotaoCustomizado cor="primaria" aoClicar={() => alert('Funcionou!')}>Botão Primário</BotaoCustomizado>
      <BotaoCustomizado cor="secundaria" aoClicar={() => alert('Funcionou!')}>Botão Secundário</BotaoCustomizado>
      <BotaoCustomizado cor="padrao" aoClicar={() => alert('Funcionou!')}>Botão Padrão</BotaoCustomizado>
    </main>
  );
}

export default Principal;