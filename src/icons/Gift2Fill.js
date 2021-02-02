import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGift2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 13v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7h16zM14.5 2a3.5 3.5 0 013.163 5.001L21 7a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1l3.337.001a3.5 3.5 0 015.664-3.95A3.48 3.48 0 0114.5 2zm-5 2a1.5 1.5 0 00-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 00-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 00-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 000-2.986L14.5 4z" />
    </Svg>
  );
}

export default SvgGift2Fill;
