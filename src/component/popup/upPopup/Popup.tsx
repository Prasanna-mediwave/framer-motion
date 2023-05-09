import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./popup.css";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/*Meep Meep*/}
      <div>
        <button className="btn" onClick={openModal}>
          Popup
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
              }}
            >
              <motion.div
                className="modal"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "-100vh" }}
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
}

export default Popup;
