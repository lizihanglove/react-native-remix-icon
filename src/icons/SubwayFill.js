import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSubwayFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 01-2-2V7a4 4 0 014-4h10a4 4 0 014 4v11a2 2 0 01-2 2h-1.8zM11 12V5H7a2 2 0 00-2 2v5h6zm2 0h6V7a2 2 0 00-2-2h-4v7zm-5.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgSubwayFill;
