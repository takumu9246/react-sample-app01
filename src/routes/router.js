import React,{useReducer}from "react";
import { Route } from "react-router-dom";
import UploadView from "../components/UploadView";
import MainView from "../components/MainView";

const initialState = {
  file: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ON":
      return { ...state, file: action.payload };
    default:
      return state;
  }
};

export const FileSave = React.createContext();

const FileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FileSave.Provider value={{ state, dispatch }}>
      {children}
    </FileSave.Provider>
  );
};


const Router = () => {
  return (
    <FileProvider>
      <div>
        <div>
          <Route path="/" exact>
            <UploadView />
          </Route>
          <Route path="/main" exact>
            <MainView />
          </Route>
        </div>
      </div>
    </FileProvider>
  );
};

export default Router;
