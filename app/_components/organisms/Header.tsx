import { Box } from "@chakra-ui/react";

import Navbar from "../molecules/Navbar";
import MobileNav from "../molecules/MobileNav";
import SkipLink from "../atoms/SkipLink";

const Header = () => {
  return (
    <Box
      as="header"
      bg="black"
      py={8}
      borderBottom={["1px", "unset"]}
      borderColor="divider"
    >
      <SkipLink />
      <Navbar />
      <MobileNav />
    </Box>
  );
};

export default Header;
