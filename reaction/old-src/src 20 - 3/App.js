import * as React from "react";
import Layout from "./components/Layout";

import "./App.css"; // Set the theme of the page to default to "light"
export const ThemeContext = React.createContext("light");

console.log(ThemeContext);

function App() {
  // App component that provides initial context values
  // Here we are overwritting the context to be "dark" using the Provider
  return (
    <ThemeContext.Provider value={"green"}>
      <Layout />
    </ThemeContext.Provider>
  );
}

export default App;
