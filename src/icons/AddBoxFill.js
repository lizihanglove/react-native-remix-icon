import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAddBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm7 8H7v2h4v4h2v-4h4v-2h-4V7h-2v4z" />
    </Svg>
  );
}

export default SvgAddBoxFill;
