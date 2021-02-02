import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMailDownloadFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 12.803A6 6 0 0013.803 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v8.803zm-9.94-1.12L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439zM20 18h3l-4 4-4-4h3v-4h2v4z" />
    </Svg>
  );
}

export default SvgMailDownloadFill;