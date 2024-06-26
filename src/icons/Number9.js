import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNumber9(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1.5a6.5 6.5 0 015.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1112 1.5zm0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
    </Svg>
  );
}

export default SvgNumber9;
