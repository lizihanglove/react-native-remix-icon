import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFullscreenExitLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z" />
    </Svg>
  );
}

export default SvgFullscreenExitLine;
