import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoonFoggyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 20.334V18h-2v-4H3.332A9.512 9.512 0 013 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0011.49 9.724 9.505 9.505 0 01-5.99 8.4zM7 20h7v2H7v-2zm-5-4h10v2H2v-2z" />
    </Svg>
  );
}

export default SvgMoonFoggyFill;
