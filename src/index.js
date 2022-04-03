/* --- React Import ------ */
import React from "react";
import ReactDOM from "react-dom";
/* --- Context Import ---- */
import CounterContextProvider from "./Context";
/* --- Components Import - */
import { LeftDrawer, RightDrawer, CenterDrawer } from "./components";
/* --- Style Import ------ */
import "./style.css";

const App = () => {
  return (
    <div id="App">
      <CounterContextProvider>
        <LeftDrawer />
        <CenterDrawer />
      </CounterContextProvider>
    </div>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
