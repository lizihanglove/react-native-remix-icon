import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolder3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 7v12h16V7H4z" />
    </Svg>
  );
}

export default SvgFolder3Line;
