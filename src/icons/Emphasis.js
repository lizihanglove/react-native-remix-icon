import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmphasis(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18 3v2H8v4h9v2H8v4h10v2H6V3h12z" />
    </Svg>
  );
}

export default SvgEmphasis;
