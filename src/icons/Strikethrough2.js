import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStrikethrough2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 9h-2V6H5V4h14v2h-6v3zm0 6v5h-2v-5h2zM3 11h18v2H3v-2z" />
    </Svg>
  );
}

export default SvgStrikethrough2;
