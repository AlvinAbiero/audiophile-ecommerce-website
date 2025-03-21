import { VStack } from "@chakra-ui/react";

import YX1Earphones from "../molecules/YX1Earphones";
import ZX7Speaker from "../molecules/ZX7Speaker";
import ZX9Speaker from "../molecules/ZX9Speaker";

const MainGallery = () => {
  return (
    <VStack
      mt="7.5rem"
      spacing={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
      align="stretch"
    >
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </VStack>
  );
};

export default MainGallery;
