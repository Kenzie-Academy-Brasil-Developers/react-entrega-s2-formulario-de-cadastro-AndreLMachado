import "./style.css";

import { useHistory, useParams } from "react-router-dom";

import imagem from "../../assets/img/pirata1.png";

const Home = ({ usuario }) => {
  const params = useParams();
  const history = useHistory();

  const pageLogin = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Bem vindo {params.name}!</h1>
      <img src={imagem} alt="imagem"></img>
      <button onClick={pageLogin}>Retornar a pagina de Cadastro</button>
    </div>
  );
};

export default Home;
