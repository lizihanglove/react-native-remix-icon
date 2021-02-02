import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlideshowLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 21v2h-2v-2H3a1 1 0 01-1-1V6h20v14a1 1 0 01-1 1h-8zm-9-2h16V8H4v11zm9-9h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4v3h3a3 3 0 11-3-3zM2 3h20v2H2V3z" />
    </Svg>
  );
}

export default SvgSlideshowLine;
