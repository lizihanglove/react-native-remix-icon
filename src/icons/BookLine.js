import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 000 3H19zM5 15.337A3.486 3.486 0 016.5 15H19V4H6a1 1 0 00-1 1v10.337z" />
    </Svg>
  );
}

export default SvgBookLine;
