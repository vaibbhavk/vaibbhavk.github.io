import Typography from "@mui/material/Typography";

const Projects = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((el, index) => (
        <Typography paragraph key={index}>
          Projects page
        </Typography>
      ))}
    </>
  );
};

export default Projects;
