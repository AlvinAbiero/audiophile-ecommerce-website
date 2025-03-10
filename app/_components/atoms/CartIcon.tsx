import { Button, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useModal } from "../../_store/ModalContextProvider";
import { totalQuantity } from "../../_store/CartSlice";

export default function CartIcon() {
  const { onCartModalOpen } = useModal();
  const quantity = useSelector(totalQuantity);

  return (
    <Button
      position="relative"
      bg="transparent"
      border="none"
      p="0"
      onClick={onCartModalOpen}
      aria-label="Show Cart"
      _hover={{
        bg: "transparent",
      }}
      fontWeight="normal"
    >
      <Image
        src="/images/shared/desktop/icon-cart.svg"
        width={23}
        height={21}
        aria-hidden="true"
        alt=""
      ></Image>
      {!!quantity && (
        <Center
          as="span"
          p=".6rem"
          position="absolute"
          width="1rem"
          height="1rem"
          bg="accent"
          fontSize="0.8125rem"
          borderRadius="50%"
          color="white"
          top="-0.375rem"
          right="-0.75rem"
        >
          {quantity}
        </Center>
      )}
    </Button>
  );
}
