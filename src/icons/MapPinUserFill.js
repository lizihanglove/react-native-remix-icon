import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPinUserFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.084 15.812a7 7 0 10-10.168 0A5.996 5.996 0 0112 13a5.996 5.996 0 015.084 2.812zM12 23.728l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM12 12a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgMapPinUserFill;
