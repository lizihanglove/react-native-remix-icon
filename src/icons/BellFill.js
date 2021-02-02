import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBellFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13.414 10.586l.48.486.465.485.459.492c3.458 3.764 5.472 7.218 4.607 8.083-.4.4-1.356.184-2.64-.507a9.006 9.006 0 01-10.403-.592l2.98-2.98a2 2 0 10-1.45-1.569l.035.155-2.979 2.98a9.007 9.007 0 01-.592-10.405c-.692-1.283-.908-2.238-.508-2.639.977-.976 5.25 1.715 9.546 6.01zm6.364-6.364a2 2 0 01-.164 2.976 9.015 9.015 0 01.607 8.47c-1.189-1.954-3.07-4.174-5.393-6.496l-.537-.532c-2.128-2.079-4.156-3.764-5.958-4.86a9.015 9.015 0 018.471.607 2 2 0 012.974-.165z" />
    </Svg>
  );
}

export default SvgBellFill;