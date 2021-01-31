import React, { CSSProperties } from "react";

type Props = {
  text: string;
  style: CSSProperties;
};

const Text: React.FC<Props> = ({ text, style }) => {
  return <p style={style}>{text}</p>;
};

export default Text;
