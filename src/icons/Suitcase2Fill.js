import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuitcase2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 01-2-2V7a2 2 0 012-2h3V3a1 1 0 011-1h6a1 1 0 011 1v2h3a2 2 0 012 2v13a2 2 0 01-2 2h-1v1zM10 9H8v9h2V9zm6 0h-2v9h2V9zm-2-5h-4v1h4V4z" />
    </Svg>
  );
}

export default SvgSuitcase2Fill;
