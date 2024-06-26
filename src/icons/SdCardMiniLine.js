import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSdCardMiniLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 4v5.793a2.5 2.5 0 01-.73 1.765L6 12.833V20h12V4H8zM7 2h12a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-8.58a1 1 0 01.292-.707l1.562-1.567A.5.5 0 006 9.793V3a1 1 0 011-1zm8 3h2v4h-2V5zm-3 0h2v4h-2V5zM9 5h2v4H9V5z" />
    </Svg>
  );
}

export default SvgSdCardMiniLine;
