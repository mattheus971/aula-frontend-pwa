import './MostrarMultiplicacao.css';

const MostrarMultiplicacao = ({ numeroUm, numeroDois }) => {
  const multiplicacao = numeroUm * numeroDois;

  return (
    <div>
      A Multiplicação de {numeroUm} * {numeroDois} é:{' '}
      {multiplicacao}
    </div>
  );
};

export default MostrarMultiplicacao;
