import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForbid2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.891-13.477a6.036 6.036 0 00-1.414-1.414l-8.368 8.368a6.041 6.041 0 001.414 1.414l8.368-8.368z" />
    </Svg>
  );
}

export default SvgForbid2Fill;
