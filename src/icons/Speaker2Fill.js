import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpeaker2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm8 14a5 5 0 110-10 5 5 0 010 10zm0 2a7 7 0 100-14 7 7 0 000 14zm0-5a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgSpeaker2Fill;
