import React from "react";

interface SpacerProps {
  size?: number;
  axis?: "horizontal" | "vertical";
  style?: React.CSSProperties;
}
const Spacer = ({ size = 8, axis = "vertical", style = {} }: SpacerProps) => {
  const width = axis === "vertical" ? 2 : size;
  const height = axis === "horizontal" ? 2 : size;

  return (
    <span
      // className={""}
      style={{
        width: `${width}px`,
        minWidth: `${width}px`,
        height: `${height}px`,
        minHeight: `${height}px`,
        ...style,
      }}
    ></span>
  );
};

export default Spacer;
