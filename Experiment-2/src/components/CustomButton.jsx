import { Button } from "@mui/material";

const CustomButton = ({ text }) => {
  return (
    <Button variant="contained" color="primary">
      {text}
    </Button>
  );
};

export default CustomButton;
