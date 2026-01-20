import { Container, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Typography>
        Welcome to our website built using Material UI.
      </Typography>

      <CustomButton text="Get Started" />
    </Container>
  );
};

export default Home;
