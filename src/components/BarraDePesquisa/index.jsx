import { useState } from "react";
import "./styles.css";

const BarraDePesquisa = () => {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  console.log(termoPesquisa);
  return (
    <>
      <input
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        className="barra-pesquisa"
        type="search"
        placeholder="Digite o que você procura"
      />
    </>
  );
};

export default BarraDePesquisa;
