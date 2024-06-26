import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipForwardMiniLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.032 12L9 9.86v4.28L12.032 12zM7.5 17.535a.5.5 0 01-.5-.5V6.965a.5.5 0 01.788-.409l7.133 5.035a.499.499 0 010 .818l-7.133 5.034a.5.5 0 01-.288.092zM16 7a1 1 0 112 0v10a1 1 0 11-2 0V7z" />
    </Svg>
  );
}

export default SvgSkipForwardMiniLine;
