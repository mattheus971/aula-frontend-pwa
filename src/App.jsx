import ListaProdutos from './paginas/ListaProdutos/ListaProdutos/ListaProdutos';
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Principal from './comum/componentes/Principal/Principal';
import Rodape from './comum/componentes/Rodape/Rodape';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './paginas/ListaProdutos/PaginaInicial/PaginaInicial'

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  },
 ]); 

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;

 