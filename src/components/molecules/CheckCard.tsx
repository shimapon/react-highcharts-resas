import React from "react";
import CheckBox from "../atoms/CheckBox";
import Text from "../atoms/Text";

type Props = {
  name: string;
};

const Styles: { [key: string]: React.CSSProperties } = {
  text: { display: "contents", marginLeft: "1em" },
  checkcard: { width: "100px" },
};

const CheckCard: React.FC<Props> = ({ name }) => {
  return (
    <div style={Styles.checkcard}>
      <CheckBox />
      <Text text={name} style={Styles.text} />
    </div>
  );
};

export default CheckCard;
