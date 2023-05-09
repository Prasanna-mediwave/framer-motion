import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./hamburger.css";

const routes = [
  {
    name: "Dashboard",
  },
  {
    name: "Users",
  },
  {
    name: "Messages",
  },
  {
    name: "Settings",
  },
  {
    name: "contact",
  },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="icon-container" onClick={handleToggle}>
        <motion.span
          className="icon-close"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 6, transition: { duration: 0.3 } },
          }}
        />
        <motion.span
          className="icon-close"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1, y: 0 },
            open: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
        />
        <motion.span
          className="icon-close"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8, transition: { duration: 0.3 } },
          }}
        />
      </button>
      <motion.div
        className="menu-container"
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { width: 0 },
          open: { width: "100%", transition: { delay: 0.2, duration: 0.5 } },
        }}
      >
        <motion.div
          className="menu-wapper"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 0 },
            open: {
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            },
          }}
        >
          <div className="item-list">
            {routes.map((item: any, i: any) => (
              <motion.div
                key={item.id}
                className="list-view"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: i + 1 },
                }}
              >
                {item.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HamburgerMenu;
