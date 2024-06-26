import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrelloLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.001 5v14h14V5h-14zm0-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-14a2 2 0 01-2-2V5a2 2 0 012-2zm3 4h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1V8a1 1 0 011-1zm6 0h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V8a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgTrelloLine;
