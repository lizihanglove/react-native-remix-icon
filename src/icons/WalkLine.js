import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWalkLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.617 8.712l3.205-2.328A1.995 1.995 0 0112.065 6a2.616 2.616 0 012.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0019 11v2a6.986 6.986 0 01-5.402-2.547l-.697 3.955 2.061 1.73 2.223 6.108-1.88.684-2.04-5.604-3.39-2.845a2 2 0 01-.713-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7l.017.012zM13.5 5.5a2 2 0 110-4 2 2 0 010 4zm-2.972 13.181l-3.214 3.83-1.532-1.285 2.976-3.546.746-2.18 1.791 1.5-.767 1.681z" />
    </Svg>
  );
}

export default SvgWalkLine;