import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileListFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM8 7v2h8V7H8zm0 4v2h8v-2H8zm0 4v2h8v-2H8z" />
    </Svg>
  );
}

export default SvgFileListFill;
