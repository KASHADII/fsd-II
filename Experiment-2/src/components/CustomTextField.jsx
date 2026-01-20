import { TextField } from "@mui/material";

const CustomTextField = ({ label }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default CustomTextField;
