import React, { useContext ,useState} from "react";
import { FileSave } from "../routes/router";

const MainView = () => {
  const { state } = useContext(FileSave);
  
  const rows = state.file.map((file, index) => {
    const row = file.map((cell) => {
      return <th>{cell}</th>;
    });
    return <tr>{row}</tr>;
  });

  return (
    <div>
      <div>
        <table>{rows}</table>
      </div>
    </div>
  );
};

export default MainView;
