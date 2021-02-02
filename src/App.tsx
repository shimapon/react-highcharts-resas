import React from "react";
import Header from "./components/molecules/Header";
import Main from "./components/pages/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="都道府県別人口推移" />
      <Main />
    </div>
  );
};

export default App;
