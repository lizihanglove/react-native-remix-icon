import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayListFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 11-2-2.83z" />
    </Svg>
  );
}

export default SvgPlayListFill;
