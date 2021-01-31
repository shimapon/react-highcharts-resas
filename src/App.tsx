import React from "react";
import Text from "./components/atoms/Text";
import Main from "./components/pages/Main";

const Styles: { [key: string]: React.CSSProperties } = {
  header: {
    width: "100%",
    backgroundColor: "#2d2d2d",
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    padding: "0 2em",
  },
  title: {
    fontSize: "30px",
    color: "white",
  },
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header style={Styles.header}>
        <div style={Styles.headerInner}>
          <Text text="都道府県別人口グラフ" style={Styles.title} />
        </div>
      </header>
      <Main />
    </div>
  );
};

export default App;
