"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CustomModal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "xs"
}: IProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="border-b border-border-soft">
          <h3 className="text-xl font-serif font-bold text-foreground">
            {title}
          </h3>
        </ModalHeader>
        <ModalBody className="space-y-4 py-6">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;