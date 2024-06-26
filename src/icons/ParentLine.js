import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgParentLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10.5 2a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zm2.5 6v-.5a2.5 2.5 0 00-5 0v.5h-2v-.5a4.5 4.5 0 119 0v.5h-2zm-10 0v-4a3 3 0 10-6 0v4H2v-4a5 5 0 0110 0v4h-2z" />
    </Svg>
  );
}

export default SvgParentLine;
