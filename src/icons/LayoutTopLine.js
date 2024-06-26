import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutTopLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM4 10v9h16v-9H4zm0-2h16V5H4v3z" />
    </Svg>
  );
}

export default SvgLayoutTopLine;
