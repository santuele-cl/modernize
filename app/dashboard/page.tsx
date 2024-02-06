import { Box, Button, Paper } from "@mui/material";

export default function Dashboard() {
  return (
    <Box height="200vh">
      Dashboard
      <Button variant="contained" color="success">
        Sample
      </Button>
      <Button variant="outlined" color="success">
        Sample
      </Button>
      <Button variant="contained" color="warning">
        Sample
      </Button>
      <Button variant="outlined" color="warning">
        Sample
      </Button>
      <Box p={2}>
        <Paper>sldkfjksdjf</Paper>
      </Box>
    </Box>
  );
}
