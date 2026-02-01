import Typography from "@mui/material/Typography";
import LocalStateCounter from "../components/LocalStateCounter";

export default function Home() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Home Page
      </Typography>

      <LocalStateCounter cno="Counter 1" />
      <LocalStateCounter cno="Counter 2" />
    </>
  );
}
