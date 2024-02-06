"use client";

import { Metadata } from "next";
import Sidebar from "../_ui/dashboard/Sidebar";
import Navbar from "../_ui/dashboard/Navbar";
import {
  Box,
  Collapse,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import TemporaryDrawer from "../_ui/dashboard/TemporaryDrawer";

// export const metadata: Metadata = {
//   title: "Modernize : Dashboard",
//   description: "Modernize dashboard",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [showSidebar, setShowSidebar] = useState(false);
  const [showTemporarySidebar, setShowTemporarySidebar] = useState(false);

  useEffect(() => {
    setShowSidebar(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Box position="relative">
      <Navbar setShowTemporarySidebar={setShowTemporarySidebar} />
      <TemporaryDrawer
        showTemporarySidebar={showTemporarySidebar}
        setShowTemporarySidebar={setShowTemporarySidebar}
      />
      <Stack direction="row" position="relative">
        <Box position="sticky" top="64px" left="0" alignSelf="flex-start">
          <Stack
            direction="row"
            minHeight="calc(100dvh - 64px)"
            bgcolor="general"
            borderRight="1px solid rgba(0,0,0,.1)"
          >
            <Collapse in={showSidebar} orientation="horizontal" timeout={500}>
              <Sidebar />
            </Collapse>
          </Stack>
        </Box>
        <Box flexGrow="1" p={4} bgcolor="#F5F6FA">
          <Paper elevation={1} sx={{ p: 2 }}>
            {children}
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
