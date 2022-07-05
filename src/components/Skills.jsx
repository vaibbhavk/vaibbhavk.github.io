import Typography from "@mui/material/Typography";

const Skills = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((el, index) => (
        <Typography paragraph key={index}>
          Skills page
        </Typography>
      ))}
    </>
  );
};

export default Skills;
