import { IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { isNavOpen, toggleNav } from "../../_store/UISlice";

export default function MenuIcon() {
  const navOpen = useSelector(isNavOpen);
  const dispatch = useDispatch();

  return (
    <IconButton
      aria-label={navOpen ? "Close Menu" : "Open Menu"}
      aria-expanded={navOpen ? "true" : "false"}
      mr={{ sm: "2.625rem", lg: 0 }}
      variant="ghost"
      borderRadius="full"
      aria-haspopup="true"
      lineHeight={0}
      onClick={() => dispatch(toggleNav())}
      display={{ base: "auto", lg: "none" }}
    >
      navOpen ? (
      <Image
        src="/images/shared/tablet/icon-close-menu.svg"
        width={16}
        height={15}
        aria-hidden="true"
        alt=""
      />
      ) : (
      <Image
        src="/images/shared/tablet/icon-hamburger.svg"
        width={16}
        height={15}
        aria-hidden="true"
        alt=""
      />
      )
    </IconButton>
  );
}
