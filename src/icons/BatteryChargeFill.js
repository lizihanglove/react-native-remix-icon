import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryChargeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 11V5l-5 8h3v6l5-8h-3zM3 5h16a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm18 4h2v6h-2V9z" />
    </Svg>
  );
}

export default SvgBatteryChargeFill;
