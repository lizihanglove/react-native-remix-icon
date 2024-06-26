import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSideBarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm6 2v14h11V5H9z" />
    </Svg>
  );
}

export default SvgSideBarFill;
