import React, { useEffect, useState } from "react";
import { produtosUrl } from "../../services/apis";
import Item from "../../components/Item";
import styles from "./Feminino.module.css";
import BotaoSubmit from "../../components/BotaoSubmit";
export default function Feminino() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    try {
      fetch(produtosUrl("/femininos"))
        .then((res) => res.json())
        .then((data) => {
          setProdutos(data.Produtos);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("erro: ", error);
    }
  }, []);

  return (
    <div className={styles.container}>
      {produtos.map((produto, index) => {
        return (
          <Item
            key={index}
            img={produto.url_imagem}
            titulo={produto.titulo}
            preco={produto.preco}
            descricao={produto.descricao}
          />
        );
      })}
    </div>
  );
}