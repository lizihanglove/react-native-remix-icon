import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRobotFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 4.055A9 9 0 0121 13v9H3v-9a9 9 0 018-8.945V1h2v3.055zM12 18a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgRobotFill;
