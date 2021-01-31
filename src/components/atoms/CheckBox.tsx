import React from "react";

type Props = {
  name: string;
  prefName: number;
  onChange: (name: string, prefName: number, check: boolean) => void;
};

const CheckBox: React.FC<Props> = ({ name, prefName, onChange }) => {
  return (
    <input
      type="checkbox"
      name="Prefecture name"
      onChange={(event) => onChange(name, prefName, event.target.checked)}
    />
  );
};

export default CheckBox;
