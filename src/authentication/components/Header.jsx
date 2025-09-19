import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
};

const logoVariants = {
  initial: { x: -50, opacity: 0, scale: 0.8 },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  initial: { rotate: -180, scale: 0 },
  animate: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.3,
    },
  },
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const buttonsVariants = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  initial: { y: 20, opacity: 0, scale: 0.9 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -2,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const Header = () => {
  // Styles communs avec la police professionnelle
  const commonFontStyles = {
    fontFamily:
      "'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Monaco', 'Consolas', monospace",
    letterSpacing: "0.5px",
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="flex min-h-[80px] w-full items-center justify-between px-8 md:px-16 lg:px-24 xl:px-44 shadow-lg backdrop-blur-sm  sticky top-0 z-50 border-b border-gray-100"
    >
      <Link to={"/"} className="flex items-center">
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          className="flex items-center"
        >
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#3343e7] to-[#5c5cfe] rounded-xl mr-4 shadow-lg"
          >
            <span
              className="text-white text-2xl font-bold"
              style={commonFontStyles}
            >
              &lt;/&gt;
            </span>
          </motion.div>

          <motion.div variants={textVariants}>
            <p
              className="text-3xl md:text-4xl bg-gradient-to-r from-[#3343e7] to-[#5c5cfe] bg-clip-text text-transparent font-bold select-none"
              style={{
                ...commonFontStyles,
                fontWeight: 700,
              }}
            >
              CodeX
            </p>
          </motion.div>
        </motion.div>
      </Link>

      <motion.div variants={buttonsVariants} className="flex gap-3 md:gap-4">
        <Link to={"/signin"}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="outlined"
              sx={{
                ...commonFontStyles,
                textTransform: "none",
                fontWeight: 600,
                color: "#3343e7",
                fontSize: { xs: "14px", md: "16px" },
                borderColor: "#3343e7",
                borderRadius: "12px",
                borderWidth: "2px",
                px: { xs: 2.5, md: 3.5 },
                py: 1,
                minWidth: { xs: "80px", md: "100px" },
                boxShadow: "0 2px 8px rgba(51, 67, 231, 0.1)",
                transition: "all 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #3343e7 0%, #4a4bff 100%)",
                  color: "white",
                  borderColor: "#3343e7",
                  borderWidth: "2px",
                  boxShadow: "0 6px 20px rgba(51, 67, 231, 0.3)",
                  transform: "translateY(-2px)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                  boxShadow: "0 2px 8px rgba(51, 67, 231, 0.2)",
                },
              }}
            >
              Sign In
            </Button>
          </motion.div>
        </Link>

        <Link to={"/signup"}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="contained"
              sx={{
                ...commonFontStyles,
                textTransform: "none",
                background: "linear-gradient(135deg, #5c5cfe 0%, #4a4bff 100%)",
                fontWeight: 600,
                fontSize: { xs: "14px", md: "16px" },
                borderRadius: "12px",
                px: { xs: 2.5, md: 3.5 },
                py: 1,
                minWidth: { xs: "80px", md: "100px" },
                boxShadow: "0 4px 15px rgba(92, 92, 254, 0.3)",
                border: "2px solid transparent",
                transition: "all 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #4a4bff 0%, #3939ff 100%)",
                  boxShadow: "0 8px 25px rgba(92, 92, 254, 0.4)",
                  transform: "translateY(-2px)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                  boxShadow: "0 4px 15px rgba(92, 92, 254, 0.3)",
                },
              }}
            >
              Sign Up
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;
