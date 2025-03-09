import React, { createContext, useEffect, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

type ContextProps = {
  isCartModalOpen: boolean;
  onCartModalOpen: () => void;
  onCartModalClose: () => void;
  isCheckoutModalOpen: boolean;
  onCheckoutModalOpen: () => void;
  onCheckoutModalClose: () => void;
};

type ModalContextProviderProps = {
  children: React.ReactNode; // Define the type for children
};

const initialState = {
  isCartModalOpen: false,
  onCartModalOpen: () => undefined,
  onCartModalClose: () => undefined,
  isCheckoutModalOpen: false,
  onCheckoutModalOpen: () => undefined,
  onCheckoutModalClose: () => undefined,
};

const ModalContext = createContext<ContextProps>(initialState);

export const useModal = (): ContextProps => {
  return useContext(ModalContext);
};

const ModalContextProvider: React.FC<ModalContextProviderProps> = ({
  children,
}): React.ReactElement => {
  const {
    open: isCartModalOpen,
    onOpen: onCartModalOpen,
    onClose: onCartModalClose,
  } = useDisclosure();

  const {
    open: isCheckoutModalOpen,
    onOpen: onCheckoutModalOpen,
    onClose: onCheckoutModalClose,
  } = useDisclosure();

  useEffect(() => {
    if (isCartModalOpen || isCheckoutModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [isCartModalOpen, isCheckoutModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isCartModalOpen,
        onCartModalOpen,
        onCartModalClose,
        isCheckoutModalOpen,
        onCheckoutModalOpen,
        onCheckoutModalClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
