import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "./uncovering.css";
const UncoveringPopup = () => {
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
        <button className="btn" onClick={openModal}>
          Uncovering
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              onClick={closeModal}
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: "100vh",
              }}
            >
              <motion.div
                className="modal"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
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

export default UncoveringPopup;
