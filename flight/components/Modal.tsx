"use client";
import { createContext, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
interface ModalContextType {
  isModalOpen: boolean;
  modalContent: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalContent, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useModal();

  return createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 flex justify-center items-center z-50"
          initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
          exit={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="modal-content"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg relative z-60"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 "
            >
              <IoMdClose />
            </button>
            {modalContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
