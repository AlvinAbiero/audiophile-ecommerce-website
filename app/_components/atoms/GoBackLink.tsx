import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function GoBackLink() {
  const router = useRouter();

  return (
    <Button
      as="a"
      variant="ghost"
      onClick={() => router.back()}
      mt={{ base: "1rem", sm: "2rem", lg: "5rem" }}
      fontSize="0.9375rem"
      textTransform="capitalize"
    >
      Go back
    </Button>
  );
}
