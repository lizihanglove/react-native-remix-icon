import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUser3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 22h-2v-2a3 3 0 00-3-3H9a3 3 0 00-3 3v2H4v-2a5 5 0 015-5h6a5 5 0 015 5v2zm-8-9a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8z" />
    </Svg>
  );
}

export default SvgUser3Line;
