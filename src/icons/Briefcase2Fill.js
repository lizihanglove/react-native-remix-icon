import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBriefcase2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 5V2a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4zm10 8v-3h-2v3H9v-3H7v3H4v6h16v-6h-3zM9 3v2h6V3H9z" />
    </Svg>
  );
}

export default SvgBriefcase2Fill;
