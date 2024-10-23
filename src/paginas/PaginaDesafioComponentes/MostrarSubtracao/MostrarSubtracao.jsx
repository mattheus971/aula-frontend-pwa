import './MostrarSubtracao.css';

const MostrarSubtracao = ({ numeroUm, numeroDois }) => {
  const subtracao = numeroUm - numeroDois;

  return (
    <div>
      A Subtração de {numeroUm} - {numeroDois} é:{' '}
      {subtracao}
    </div>
  );
};

export default MostrarSubtracao;
