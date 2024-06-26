import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHome3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 21H5a1 1 0 01-1-1v-9H1l10.327-9.389a1 1 0 011.346 0L23 11h-3v9a1 1 0 01-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z" />
    </Svg>
  );
}

export default SvgHome3Line;
