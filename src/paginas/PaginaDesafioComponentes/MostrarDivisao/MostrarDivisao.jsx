import './MostrarDivisao.css';

const MostrarDivisao = ({ numeroUm, numeroDois }) => {
  const divisao = numeroUm / numeroDois;

  return (
    <div>
      A Divisão de {numeroUm} / {numeroDois} é: {divisao}
    </div>
  );
};

export default MostrarDivisao;
