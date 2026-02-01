import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(prev => prev + 1);
  const decreaseCount = () => setCount(prev => prev - 1);

  return (
    <Box sx={{ bgcolor: "#cfe8fc", p: 2, borderRadius: 2, mb: 2 }}>
      <h3>
        {cno} : Local State Count → {count}
      </h3>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={increaseCount}>
          Increase
        </Button>
        <Button variant="outlined" onClick={decreaseCount}>
          Decrease
        </Button>
      </Stack>
    </Box>
  );
}
