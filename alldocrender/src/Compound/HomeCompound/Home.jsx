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
import { Plus } from "react-bootstrap-icons";
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
  const [input, setInput] = useState("");

  const handleUploadFile = (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result);
    };
    console.log(reader.readAsDataURL(file));
  };

  const handlefileredItems = docs.filter((item, index) => {
    return input.length
      ? item.get("name", "").toLowerCase().includes(input.toLowerCase())
      : true;
  });

  const filderListItem = handlefileredItems.map((item, index) => {
    return (
      <DesignCard
        name={item.get("name", "")}
        filePath={item.get("filePath", "")}
        key={index}
        type={item.get("type", "")}
      />
    );
  });

  const prakash = [{ uri: PPT, fileType: "ppt", fileName: "demo" }];

  return (
    <div className="container-fulid">
      {/* NAVBAR START*/}
      <nav className="navbar navbar-light bg-light px-5 py-4">
        <div className="container-fluid">
          <a className="navbar-brand">React Files Viewer</a>
          <form className="d-flex">
            <div className="mx-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div>
              <label
                className="btn btn-outline-success"
                htmlFor={"icon-button-file"}
              >
                <Plus size={25} />
                Upload File
              </label>
              <input
                type="file"
                id={"icon-button-file"}
                onChange={(e) => handleUploadFile(e)}
                style={{ display: "none" }}
              />
            </div>
          </form>
        </div>
      </nav>
      {/* NAVBAR END */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
        {filderListItem}
      </div>
      <DocViewer
        documents={prakash}
        pluginRenderers={DocViewerRenderers}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Home;
