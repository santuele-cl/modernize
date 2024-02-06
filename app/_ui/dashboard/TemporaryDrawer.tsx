import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Sidebar from "./Sidebar";
import { Dispatch, SetStateAction } from "react";

export default function TemporaryDrawer({
  showTemporarySidebar,
  setShowTemporarySidebar,
}: {
  showTemporarySidebar: boolean;
  setShowTemporarySidebar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Drawer
      anchor="left"
      open={showTemporarySidebar}
      onClose={() => setShowTemporarySidebar(false)}
      elevation={0}
    >
      <Sidebar />
    </Drawer>
  );
}
