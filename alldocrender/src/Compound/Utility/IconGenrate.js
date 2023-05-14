import React from "react";
import PPT from "../../Assets/icona/ppt (1).jpeg";
import MP3 from "../../Assets/icona/mp3.jpeg";
import PDF from "../../Assets/icona/pdf.jpeg";
import TIIFF from "../../Assets/icona/tiff.jpeg";
import XLSX from "../../Assets/icona/xlsx.jpeg";
import XLS from "../../Assets/icona/xls.jpeg";
import DOC from "../../Assets/icona/doc.jpeg";
import JPEG from "../../Assets/icona/jpeg.jpeg";
import PPTX from "../../Assets/icona/pptx.jpeg";
import PNG from "../../Assets/icona/png.jpeg";

const IconGenrate = (props) => {
  switch (props.type) {
    case "png":
      return <img src={PNG} alt="" style={{ width: "100px" }} />;
      break;
    case "jpg":
      return <img src={JPEG} alt="" style={{ width: "100px" }} />;
      break;
    case "mp3":
      return <img src={MP3} alt="" style={{ width: "100px" }} />;
      break;
    case "pdf":
      return <img src={PDF} alt="" style={{ width: "100px" }} />;
      break;
    case "ppt":
      return <img src={PPT} alt="" style={{ width: "100px" }} />;
      break;
    case "pptx":
      return <img src={PPTX} alt="" style={{ width: "100px" }} />;
      break;
    case "tiff":
      return <img src={TIIFF} alt="" style={{ width: "100px" }} />;
      break;
    case "xlsx":
      return <img src={XLSX} alt="" style={{ width: "100px" }} />;
      break;

    case "xls":
      return <img src={XLS} alt="" style={{ width: "100px" }} />;
      break;
    case "doc":
      return <img src={DOC} alt="" style={{ width: "100px" }} />;
      break;
  }
};

export default IconGenrate;
