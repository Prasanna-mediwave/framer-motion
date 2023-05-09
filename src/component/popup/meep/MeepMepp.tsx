import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./meep.css";

const MeepMepp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button className="btn" onClick={openModal}>
        Meep Meep
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
              x: "100vh",
            }}
          >
            <motion.div
              className="modal"
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              exit={{ x: "100vh" }}
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
  );
};

export default MeepMepp;
