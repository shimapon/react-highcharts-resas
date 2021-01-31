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
  checkcard: { width: "100px" },
};

const CheckCard: React.FC<Props> = ({ name, prefName, onChange }) => {
  return (
    <div style={Styles.checkcard}>
      <CheckBox prefName={prefName} name={name} onChange={onChange} />
      <Text text={name} style={Styles.text} />
    </div>
  );
};

export default CheckCard;
