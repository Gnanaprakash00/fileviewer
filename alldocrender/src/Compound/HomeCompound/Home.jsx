import React, { useState } from "react";
import { fromJS } from "immutable";
import PNG from "../../Assets/docs/png.png";
import JPEG from "../../Assets/docs/jpeg.jpg";
import MP3 from "../../Assets/docs/mp3.mp3";
import PDF from "../../Assets/docs/pdf.pdf";
import PPT from "../../Assets/docs/ppt.ppt";
import PPTX from "../../Assets/docs/pptx.pptx";
import TIFF from "../../Assets/docs/tiff.tiff";
import XLSX from "../../Assets/docs/xlsx.xlsx";
import XLS from "../../Assets/docs/xls.xls";
import DOC from "../../Assets/docs/doc.doc";
import DesignCard from "../DesginCardCompound/DesignCard";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Home = () => {
  const initialService = fromJS([
    { name: "PNG", type: "PNG", filePath: PNG },
    { name: "JPEG", type: "JPEG", filePath: JPEG },
    { name: "MP3", type: "MP3", filePath: MP3 },
    { name: "PDF", type: "PDF", filePath: PDF },
    { name: "PPT", type: "PPT", filePath: PPT },
    { name: "PPTX", type: "PPTX", filePath: PPTX },
    { name: "TIFF", type: "TIFF", filePath: TIFF },
    { name: "XLSX", type: "XLSX", filePath: XLSX },
    { name: "XLS", type: "XLS", filePath: XLS },
    { name: "DOC", type: "DOC", filePath: DOC },
  ]);
  const [docs, setDocs] = useState(initialService);

  const document = [
    {
      uri: require("../../Assets/docs/doc.doc"),
      fileType: "doc",
      fileName: "doc file",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center gap-4 m-5">
        {docs.map((item, index) => {
          return (
            <DesignCard
              name={item.get("name", "")}
              filePath={item.get("filePath", "")}
              key={index}
            />
          );
        })}
      </div>
      <div className="m-5">
        <DocViewer
          documents={document}
          pluginRenderers={DocViewerRenderers}
          config={{
            header: {
              disableHeader: false,
              disableFileName: false,
              retainURLParams: false,
            },
          }}
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default Home;
