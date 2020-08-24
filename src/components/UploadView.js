import React, { useState, useContext } from "react";
import { FileSave } from "../routes/router";
import csvfile from "./sample.csv";

const UploadView = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const { state, dispatch } = useContext(FileSave);

  return (
    <div className="downloadview">
      <div>
        <label className="csvform">
          <input
            type="file"
            name="name"
            accept=".csv"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setFilename(e.target.files[0].name);
            }}
          />
          アップロードファイルを選択
        </label>
        {/* <button onClick={()=>{
          const filename = csvfile;

        }} */}
        <a href={csvfile} download="csvfile.csv" className="csvsample">サンプルファイル</a>
      </div>
      <div>添付ファイル：{filename}</div>
      <div>
        <button
          className="uploadbutton"
          onClick={() => {
            const reader = new FileReader();
            const arry = [];
            reader.onload = () => {
              const tmp = reader.result.split("\n");
              tmp.forEach((row) => {
                const slice_row = row.split(",");
                console.log(slice_row);
                arry.push(slice_row);
              });
              console.log(arry);
              dispatch({ type: "ON", payload: arry });
            };

            if (file !== null) {
              reader.readAsText(file);
            }
          }}
        >
          アップロード
        </button>
      </div>
      {/* <div className="complete">アップロード完了</div> */}
    </div>
  );
};

export default UploadView;
