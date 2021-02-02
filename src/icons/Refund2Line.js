import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefund2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.671 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0A9.993 9.993 0 012.25 9.767l.077-.313 1.934.51a8 8 0 103.053-4.45l-.221.166L8.11 6.697l-4.596 1.06 1.06-4.596L5.67 4.257zM13 6v2h2.5v2H10a.5.5 0 00-.09.992L10 11h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 00.09-.992L14 13h-4a2.5 2.5 0 110-5h1V6h2z" />
    </Svg>
  );
}

export default SvgRefund2Line;
