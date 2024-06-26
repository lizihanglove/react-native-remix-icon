import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderChart2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM12 9a4 4 0 104 4h-4V9z" />
    </Svg>
  );
}

export default SvgFolderChart2Fill;
