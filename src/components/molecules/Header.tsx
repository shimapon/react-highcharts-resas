import React from "react";
import Text from "../atoms/Text";

type Props = {
  title: string;
};
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

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header style={Styles.header}>
      <div style={Styles.headerInner}>
        <Text text={title} style={Styles.title} />
      </div>
    </header>
  );
};

export default Header;
