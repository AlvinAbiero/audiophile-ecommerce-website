import { Box, Portal } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { isNavOpen } from "../../_store/UISlice";

export default function Overlay() {
  const navOpen = useSelector(isNavOpen);
  return (
    <Portal>
      <Box
        position="fixed"
        visibility={navOpen ? "visible" : "hidden"}
        inset="0"
        opacity={navOpen ? "1" : "0"}
        display={{ lg: "none" }}
        bg="blackAlpha.600"
        zIndex="overlay"
        height="100vh"
        transition="opacity 0.3s ease-in-out"
      ></Box>
    </Portal>
  );
}
