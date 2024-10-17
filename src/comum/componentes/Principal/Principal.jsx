import { Link } from 'react-router-dom';
import './Principal.css';
import { MdArrowBack } from "react-icons/md";

function Principal({ voltarPara, titulo, children }) {
  return (
    <main className="principal_root">
      <div className="principal_titulo">
        {voltarPara && <Link to={voltarPara}><MdArrowBack size={24} color='#1c2025'/></Link>}

        <h1>{titulo}</h1>
      </div>

      {children}
    </main>
  );
}

export default Principal;
