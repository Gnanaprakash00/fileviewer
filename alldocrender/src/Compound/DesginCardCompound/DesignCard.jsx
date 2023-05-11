import React from "react";
import { Card } from "react-bootstrap-v5";

const DesignCard = (props) => {
  const { name } = props;
  return (
    <Card style={{ width: "18rem", height: "18rem" }}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <img src="" alt="img" />
      </Card.Body>
      <Card.Footer className="text-center">{name}</Card.Footer>
    </Card>
  );
};

export default DesignCard;
