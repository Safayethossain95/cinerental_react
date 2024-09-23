import { useReducer, useState } from "react";
import {  ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { MovieContext, ThemeContext } from "./context/index.js";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer.js";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer position="top-center"/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
