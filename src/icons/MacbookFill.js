import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMacbookFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4.007C2 3.45 2.455 3 2.992 3h18.016c.548 0 .992.45.992 1.007V17H2V4.007zM1 19h22v2H1v-2z" />
    </Svg>
  );
}

export default SvgMacbookFill;
