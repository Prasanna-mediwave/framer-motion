import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./revealing.css";

const RevealingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <div>
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: isOpen ? 0.8 : 1 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </motion.h2>
        </div>
        <button className="btn" onClick={openModal}>
          Revealing
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="modal-overlay"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
            >
              <motion.div
                className="modal"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{
                  type: "spring",
                  stiffness: 30,
                }}
              >
                <h2>Modal Content</h2>
                <button className="btn" onClick={closeModal}>
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default RevealingPopup;
