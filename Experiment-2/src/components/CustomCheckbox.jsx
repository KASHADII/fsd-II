import { Checkbox, FormControlLabel } from "@mui/material";

const CustomCheckbox = () => {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label="I agree to terms"
    />
  );
};

export default CustomCheckbox;
