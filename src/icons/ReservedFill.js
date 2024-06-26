import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReservedFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1h-7zM8 8v2h8V8H8z" />
    </Svg>
  );
}

export default SvgReservedFill;
