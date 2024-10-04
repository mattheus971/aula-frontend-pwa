import './Rodape.css';

function Rodape() {
  const anoAtual = new Date().getFullYear()

  return <footer className='rodape_root'>
    Copyright © {anoAtual} - Todos os direitos reservados - Matheus Velozo.
  </footer>;
}

export default Rodape;
