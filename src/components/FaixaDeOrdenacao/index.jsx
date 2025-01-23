import "./styles.css";

const FaixaDeOrdenacao = () => {
  function removeAllActive() {
    document.querySelectorAll(".container__faixa a").forEach((a) => {
      a.classList.remove("container__faixa__item--ativo");
    });
  }

  return (
    <div className="container__faixa">
      <ul>
        <li>
          <a
            href="#"
            className="container__faixa__item container__faixa__item--ativo"
            onClick={(e) => {
              removeAllActive();
              e.target.classList.add("container__faixa__item--ativo");
            }}
          >
            Recentes
          </a>
        </li>
        <li>
          <a
            href="#"
            className="container__faixa__item"
            onClick={(e) => {
              removeAllActive();
              e.target.classList.add("container__faixa__item--ativo");
            }}
          >
            Recentes
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FaixaDeOrdenacao;
