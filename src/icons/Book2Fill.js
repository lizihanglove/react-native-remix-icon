import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBook2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 18H6a1 1 0 100 2h15v2H6a3 3 0 01-3-3V4a2 2 0 012-2h16v16zm-5-9V7H8v2h8z" />
    </Svg>
  );
}

export default SvgBook2Fill;
