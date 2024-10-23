import './MostrarSoma.css';

const MostrarSoma = ({ numeroUm, numeroDois }) => {
  const soma = numeroUm + numeroDois;

  return (
    <div>
      A soma de {numeroUm} + {numeroUm} é: {soma}
    </div>
  );
};

export default MostrarSoma;
