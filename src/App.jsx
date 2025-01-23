import { useEffect, useState } from "react";
import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Card from "./components/Card";
import FaixaDeOrdenacao from "./components/FaixaDeOrdenacao";
import Filtro from "./components/Filtro";
import Sidebar from "./components/Sidebar";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <FaixaDeOrdenacao />
        <div className="container-cards">
          {dados
            ? dados.map((item, index) => {
                return (
                  <li key={index}>
                    <Card
                      id={item.id}
                      imagemUrl={item.imagem_capa}
                      titulo={item.titulo}
                      resumo={item.resumo}
                      linhasDeCodigo={item.linhas_de_codigo}
                      compartilhamentos={item.compartilhamentos}
                      comentarios={item.comentarios}
                      usuario={item.usuario}
                    />
                  </li>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
