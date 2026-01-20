import { Container, Typography } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import CustomSelect from "../components/CustomSelect";
import CustomRating from "../components/CustomRating";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Page
      </Typography>

      <CustomTextField label="Name" />
      <CustomTextField label="Email" />
      <CustomSelect />
      <CustomRating />
      <CustomCheckbox />

      <CustomButton text="Submit" />
    </Container>
  );
};

export default Contact;
