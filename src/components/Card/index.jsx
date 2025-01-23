import "./styles.css";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";

import PropTypes from "prop-types";

const Card = ({
  // eslint-disable-next-line no-unused-vars
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) => {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {comentarios}
            </li>
          </ul>

          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imagemUrl: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  resumo: PropTypes.string.isRequired,
  linhasDeCodigo: PropTypes.number.isRequired,
  compartilhamentos: PropTypes.number.isRequired,
  comentarios: PropTypes.number.isRequired,
  usuario: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
