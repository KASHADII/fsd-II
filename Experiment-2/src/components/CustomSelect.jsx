import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CustomSelect = () => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Country</InputLabel>
      <Select defaultValue="">
        <MenuItem value="india">India</MenuItem>
        <MenuItem value="usa">USA</MenuItem>
        <MenuItem value="uk">UK</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
