import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSettings2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.686 4l2.607-2.607a1 1 0 011.414 0L15.314 4H19a1 1 0 011 1v3.686l2.607 2.607a1 1 0 010 1.414L20 15.314V19a1 1 0 01-1 1h-3.686l-2.607 2.607a1 1 0 01-1.414 0L8.686 20H5a1 1 0 01-1-1v-3.686l-2.607-2.607a1 1 0 010-1.414L4 8.686V5a1 1 0 011-1h3.686zM12 15a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgSettings2Fill;
