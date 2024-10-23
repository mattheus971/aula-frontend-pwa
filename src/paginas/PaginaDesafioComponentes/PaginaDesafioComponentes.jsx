import Principal from '../../comum/componentes/Principal/Principal';
import MostrarDivisao from './MostrarDivisao/MostrarDivisao';
import MostrarMeuNomeCompleto from './MostrarMeuNomeCompleto/MostrarMeuNomeCompleto';
import MostrarMultiplicacao from './MostrarMultiplicacao/MostrarMultiplicacao';
import MostrarProduto from './MostrarProduto/MostrarProduto';
import MostrarSoma from './MostrarSoma/MostrarSoma';
import MostrarSubtracao from './MostrarSubtracao/MostrarSubtracao';

const PaginaDesafioComponentes = () => {
  return (
    <Principal>
      <MostrarSoma numeroUm={10} numeroDois={5} />

      <MostrarSubtracao numeroUm={20} numeroDois={10} />

      <MostrarDivisao numeroUm={10} numeroDois={2} />

      <MostrarMultiplicacao numeroUm={2} numeroDois={8} />

      <MostrarMeuNomeCompleto
        nome={'Matheus'}
        sobrenome={'Velozo'}
      />

      <MostrarProduto />
    </Principal>
  );
};

export default PaginaDesafioComponentes;
