import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTextDirectionR(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 5v10H9v-4a4 4 0 110-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 100 4V5zM7 17h12v2H7v2.5L3 18l4-3.5V17z" />
    </Svg>
  );
}

export default SvgTextDirectionR;
