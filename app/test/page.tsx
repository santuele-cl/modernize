"use client";
import {
  Button,
  Grow,
  Stack,
  duration,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Test() {
  const control = useAnimation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [animate, setAnimate] = useState(false);

  const parentVariant = {
    noWidth: {
      opacity: 0,
      width: "0",
    },
    fullWidth: {
      opacity: 1,
      width: "300px",
    },
  };

  const childVariant = {
    noWidth: {
      x: -100,
      opacity: 0,
      // width: "0",
    },
    fullWidth: {
      x: 0,
      opacity: 1,
      // width: "100%",
    },
  };

  return (
    <Stack direction="row" height="200vh">
      <AnimatePresence>
        {animate && (
          <Box
            p={2}
            // onClick={() => setAnimate((prev) => !prev)}
            component={motion.div}
            // animate={control}
            variants={parentVariant}
            initial="noWidth"
            animate="fullWidth"
            exit="noWidth"
            flexShrink="0"
            height="20rem"
            // width="0"
            bgcolor="red"
            // initial={{ width: 0 }}
            // animate={{ width: "250px" }}
            // exit={{ width: 0 }}
            // transition={{ duration: 1 }}
          >
            <ul style={{ listStyleType: "none" }}>
              <motion.li
                variants={childVariant}
                style={{ backgroundColor: "blue" }}
              >
                List #
              </motion.li>
              <motion.li
                variants={childVariant}
                style={{ backgroundColor: "blue" }}
              >
                List #
              </motion.li>
            </ul>
          </Box>
        )}
      </AnimatePresence>
      <Box width="20rem" height="20rem" bgcolor="lightblue" flexGrow="1">
        <Button color="success" onClick={() => setAnimate(true)}>
          Show
        </Button>
        <Button color="success" onClick={() => setAnimate(false)}>
          Hide
        </Button>
        <Button
          component={motion.button}
          onClick={() => setAnimate((prev) => !prev)}
          color="success"
          variant="contained"
          whileHover={{ scale: 1.05 }}
          // onDrag={(e) => console.log(e)}
          drag
          // dragConstraint={{}}
          // draggable
        >
          Menuss
        </Button>
        <Box
          component={motion.div}
          // onDragEnterCapture={(e) => console.log(e)}
          // onDropCapture={(e) => console.log(e)}
          whileInView={{
            scale: 1,
          }}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 0.5,
          }}
          transition={{
            duration: 0.1,
            delay: 1,
          }}
          width="10rem"
          height="10rem"
          bgcolor="teal"
        ></Box>
        <Grow appear in={isSmallScreen}>
          <Button
            onClick={() => setAnimate((prev) => !prev)}
            color="success"
            variant="contained"
          >
            Menus
          </Button>
        </Grow>
      </Box>
    </Stack>
  );
}
