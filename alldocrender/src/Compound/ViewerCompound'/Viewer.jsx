import React, { useContext } from "react";
import FileViewer from "react-file-viewer";
import { useParams } from "react-router-dom";
import { FilePath } from "../../Routers/Router";
import "./Viewer.css";

const Viewer = () => {
  const { filePath, setFilePath } = useContext(FilePath);
  return (
    <FileViewer
      filePath={filePath.filePath}
      fileType={filePath.type.toLowerCase()}
      classname="fileViewer"
    />
  );
};

export default Viewer;
