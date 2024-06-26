import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBuilding3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 10.111V1l11 6v14H3V7l7 3.111zm2-5.742v8.82l-7-3.111V19h14V8.187L12 4.37z" />
    </Svg>
  );
}

export default SvgBuilding3Line;
