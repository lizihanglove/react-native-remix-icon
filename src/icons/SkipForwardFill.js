import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipForwardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 12.667L5.777 19.482A.5.5 0 015 19.066V4.934a.5.5 0 01.777-.416L16 11.333V5a1 1 0 112 0v14a1 1 0 11-2 0v-6.333z" />
    </Svg>
  );
}

export default SvgSkipForwardFill;
