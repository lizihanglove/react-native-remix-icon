import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutTopFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 10v10a1 1 0 01-1 1H3a1 1 0 01-1-1V10h20zm-1-7a1 1 0 011 1v4H2V4a1 1 0 011-1h18z" />
    </Svg>
  );
}

export default SvgLayoutTopFill;
