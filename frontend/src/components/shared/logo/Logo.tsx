import { JSX } from "react";
import { FaBagShopping } from "react-icons/fa6";

import { LogoCircle, LogoContainer } from "./Logo.style";

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoCircle>
        <FaBagShopping />
      </LogoCircle>
      <p>Products App</p>
    </LogoContainer>
  );
};

export default Logo;
