import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRouteFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 15V8.5a4.5 4.5 0 019 0v7a2.5 2.5 0 005 0V8.83a3.001 3.001 0 112 0v6.67a4.5 4.5 0 11-9 0v-7a2.5 2.5 0 00-5 0V15h3l-4 5-4-5h3z" />
    </Svg>
  );
}

export default SvgRouteFill;
