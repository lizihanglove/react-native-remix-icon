import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignBottom(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 19h18v2H3v-2zm5-6h3l-4 4-4-4h3V3h2v10zm10 0h3l-4 4-4-4h3V3h2v10z" />
    </Svg>
  );
}

export default SvgAlignBottom;
