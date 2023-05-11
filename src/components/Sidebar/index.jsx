import { Typography, ListItemButton, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <Typography variant="h6" align="center">
        Job Finder
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemText primary="Jobs" onClick={() => navigate("jobs")} />
        </ListItemButton>
      </List>
    </aside>
  );
}
