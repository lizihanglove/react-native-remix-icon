import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMessageFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM8 10v2h8v-2H8z" />
    </Svg>
  );
}

export default SvgMessageFill;
