import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap-v5";
import IconGenrate from "../Utility/IconGenrate";
import { useNavigate, Link } from "react-router-dom";
import { FilePath } from "../../Routers/Router";

const DesignCard = (props) => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(props.filePath)[1];
  const navigate = useNavigate();
  const { setFilePath } = useContext(FilePath);

  const handleFilePath = async () => {
    await setFilePath({ type: props.type, filePath: props.filePath });
    navigate("/viewer");
  };

  return (
    <Card
      style={{ width: "18rem", height: "18rem", cursor: "pointer" }}
      onClick={handleFilePath}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        <IconGenrate type={ext} />
      </Card.Body>
      <Card.Footer className="text-center">{props.name}</Card.Footer>
    </Card>
  );
};

export default DesignCard;
