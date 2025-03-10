import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FormLegendProps {
  children: ReactNode; // Define the type for children
}

export default function FormLegend({ children }: FormLegendProps) {
  return (
    <Box
      as="legend"
      textTransform="uppercase"
      color="accent"
      fontSize="0.8125rem"
      letterSpacing="0.0581rem"
      fontWeight="bold"
      mb="1rem"
    >
      {children}
    </Box>
  );
}
