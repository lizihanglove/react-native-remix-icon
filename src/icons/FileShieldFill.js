import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileShieldFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 7v13.993A1 1 0 0120.007 22H3.993A.993.993 0 013 21.008V2.992C3 2.455 3.447 2 3.998 2h11.999L21 7zM8 8v5.6c0 .85.446 1.643 1.187 2.114L12 17.5l2.813-1.786A2.51 2.51 0 0016 13.6V8H8zm2 2h4v3.6c0 .158-.09.318-.26.426L12 15.13l-1.74-1.105c-.17-.108-.26-.268-.26-.426V10z" />
    </Svg>
  );
}

export default SvgFileShieldFill;
