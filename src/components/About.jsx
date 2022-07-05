import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((el, index) => (
        <Typography paragraph key={index}>
          About page
        </Typography>
      ))}
    </>
  );
};

export default About;
