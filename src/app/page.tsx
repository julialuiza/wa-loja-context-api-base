"use client";

import { useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";

export default function App() {
  const produtos = mockProdutos;
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <main>
      <div className="container p-5">
        <ListagemProdutos
          produtos={produtos}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>
    </main>
  );
}
