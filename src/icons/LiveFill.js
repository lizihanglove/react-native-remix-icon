import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLiveFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zM7.4 8.829a.4.4 0 00-.392.32L7 9.228v5.542a.4.4 0 00.542.374l.073-.036 4.355-2.771a.401.401 0 00.063-.625l-.063-.05L7.615 8.89A.4.4 0 007.4 8.83z" />
    </Svg>
  );
}

export default SvgLiveFill;
