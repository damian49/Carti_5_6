import React from "react";
import { Card, Button } from "react-bootstrap";

const Carte = (props) => {
  const { coperta, titlu, descriere, autor, pret } = props; //  Destructurare props

  const stil = {
    card: { width: "18rem", margin: "5px" },
    text: { fontSize: "0.8rem" },
  };

  return (
    <Card style={stil.card}>
      <Card.Img variant="top" src={coperta} />
      <Card.Body>
        <Card.Title>{titlu.toUpperCase()}</Card.Title>
        <Card.Text style={stil.text}>{descriere}</Card.Text>
        <Card.Text style={stil.text}>
          Autor: {autor}. Preț: {pret} lei.
        </Card.Text>
        <Button variant="primary">Descriere</Button>
      </Card.Body>
    </Card>
  );
};

export default Carte;
