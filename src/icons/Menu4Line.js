import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenu4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
    </Svg>
  );
}

export default SvgMenu4Line;
