import React, { useState, createContext } from "react"; 

export const CounterContext = createContext();

function CounterContextProvider(props) {
  const [appState, setAppState] = useState({
    activeDisplayId: null,
  });

  function toggleActive(id) {
    setAppState({ ...appState, activeDisplayId: id });
  }

  function toggleActiveStyle(id) {
    if (id === appState.activeDisplayId) {
      return "single-display box active";
    } else {
      return "single-display box inactive";
    }
  }

  return (
    <CounterContext.Provider
      value={{
        appState,
        toggleActiveStyle,
        toggleActive,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
