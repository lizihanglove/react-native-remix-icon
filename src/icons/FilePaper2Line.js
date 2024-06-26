import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePaper2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 2a3 3 0 013 3v2h-2v12a3 3 0 01-3 3H4a3 3 0 01-3-3v-2h16v2a1 1 0 00.883.993L18 20a1 1 0 00.993-.883L19 19V4H6a1 1 0 00-.993.883L5 5v10H3V5a3 3 0 013-3h14z" />
    </Svg>
  );
}

export default SvgFilePaper2Line;
