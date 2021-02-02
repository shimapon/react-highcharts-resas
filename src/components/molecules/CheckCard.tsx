import React from "react";
import CheckBox from "../atoms/CheckBox";
import Text from "../atoms/Text";

type Props = {
  name: string;
  prefName: number;
  onChange: (name: string, prefName: number, check: boolean) => void;
};

const Styles: { [key: string]: React.CSSProperties } = {
  text: { display: "contents", marginLeft: "1em" },
  checkcard: {
    borderRadius: "25px",
    border: "solid 2px",
    textAlign: "center",
    padding: "5px",
    cursor: "pointer",
  },
};

const CheckCard: React.FC<Props> = ({ name, prefName, onChange }) => {
  return (
    <label style={Styles.checkcard}>
      <CheckBox prefName={prefName} name={name} onChange={onChange} />
      <Text text={name.length === 3 ? "　" + name : name} style={Styles.text} />
    </label>
  );
};

export default CheckCard;
