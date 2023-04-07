import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ListaCarti from "./listacarti";
import Adaug from "./adaug";

const App = () => {
  const [lista, setLista] = useState([]);

  const adaug = (carte) => {
    const d = new Date();
    carte.id = d.getTime(); //  O solutie pentru generarea id-urilor distincte
    setLista([...lista, carte]);
  };

  return (
    <>
      <Container>
        <h1>Carti pentru copii</h1>
      </Container>
      <ListaCarti listaCarti={lista} />
      <Container>
        <Adaug transmit={adaug} />
      </Container>
    </>
  );
};

export default App;
