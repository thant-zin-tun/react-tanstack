import React from "react";

const ButtonCom = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonCom;
