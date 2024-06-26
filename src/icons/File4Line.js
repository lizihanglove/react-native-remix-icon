import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFile4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 16l-6.003 6H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v13zm-2-1V4H5v16h9v-5h5z" />
    </Svg>
  );
}

export default SvgFile4Line;
