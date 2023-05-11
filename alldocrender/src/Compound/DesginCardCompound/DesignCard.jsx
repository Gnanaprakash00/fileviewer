import React from "react";
import { Card } from "react-bootstrap-v5";
import IconGenrate from "../Utility/IconGenrate";

const DesignCard = (props) => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(props.filePath)[1];

  return (
    <Card style={{ width: "18rem", height: "18rem", cursor: "pointer" }}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <IconGenrate type={ext} />
      </Card.Body>
      <Card.Footer className="text-center">{props.name}</Card.Footer>
    </Card>
  );
};

export default DesignCard;
