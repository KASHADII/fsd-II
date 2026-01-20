import { Rating, Typography } from "@mui/material";

const CustomRating = () => {
  return (
    <>
      <Typography>Rate Us</Typography>
      <Rating defaultValue={3} />
    </>
  );
};

export default CustomRating;
