import React from "react";
import Text from "../atoms/Text";
import CheckCard from "../molecules/CheckCard";

type Props = {
  prefectures: {
    message: null;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  } | null;
  onChange: (name: string, prefName: number, check: boolean) => void;
};

const Styles: { [key: string]: React.CSSProperties } = {
  checkcardList: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    justifyContent: "space-between",
  },
  label: {
    fontSize: "20px",
    padding: "0 10px",
  },
  checkcard: {
    margin: "8px",
  },
};

const CheckField: React.FC<Props> = ({ prefectures, onChange }) => {
  console.log(prefectures);

  return (
    <>
      <Text style={Styles.label} text="都道府県" />

      {!prefectures ? (
        <></>
      ) : (
        <div style={Styles.checkcardList}>
          {prefectures.result.map((prefecture) => (
            <div style={Styles.checkcard} key={prefecture.prefName}>
              <CheckCard
                name={prefecture.prefName}
                prefName={prefecture.prefCode}
                onChange={onChange}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CheckField;
